const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const logger = (req, res, next) => {
  console.log("inside the logger");
  next();
};
const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  console.log("cookie in the middelware", token);
  if (!token) {
    return res.status(401).send({ message: "unAuthorized access" });
  }
  //verify
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unAuthorized access" });
    }
    req.decoded =decoded
      next();
  });

};

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rmmjiwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const jobsCollection = client.db("careerCode").collection("jobs");
    const applicationCollection = client
      .db("careerCode")
      .collection("application");

    //jwt token api
    app.post("/jwt", async (req, res) => {
      const userData = req.body;

      const token = jwt.sign(userData, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      //set token in the cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
      });
      res.send({ success: true });
    });
    //jobs api

    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.hr_email = email;
      }

      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollection.insertOne(newJob);
      res.send(result);
    });
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });
    // app.get("/jobByEmail", async (req, res) => {
    //   const email = req.query.email;
    //   const query = { hr_email: email };
    //   const result = await jobsCollection.find(query).toArray();
    //   res.send(result);
    // });
    // job application related application
    app.get("/application", logger, verifyToken, async (req, res) => {
      const email = req.query.email;
      if(email !== req.decoded.email){
        return res.status(403).send({message : "forbidden"})
      }
      console.log("inside", req.cookies);
      const query = {
        applicant: email,
      };
      app.get("/application/job/:job_id", async (req, res) => {
        const job_id = req.params.job_id;
        const query = { jobId: job_id };
        const result = await applicationCollection.find(query).toArray();
        res.send(result);
      });
      const result = await applicationCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/application", async (req, res) => {
      const application = req.body;
      const result = await applicationCollection.insertOne(application);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Career code!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
