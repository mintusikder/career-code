import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { Suspense } from "react";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"loading hot jobs"}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
