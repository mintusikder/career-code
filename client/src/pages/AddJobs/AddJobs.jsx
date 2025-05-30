import React from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";

const AddJobs = () => {
  const { user } = useAuth();
  const handelAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { ...newJob } = data;
    newJob.status = "active"
    console.log(newJob);
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Add Jobs</h2>
      <form onSubmit={handelAddJob} className="py-12">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Job Details</legend>

          <label className="label">Company Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="location"
          />
          <label className="label">Hr email</label>
          <input
            type="text"
            name="hr_email"
            className="input"
            defaultValue={user.email}
          />
        </fieldset>
        <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJobs;
