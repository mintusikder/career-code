import React from "react";

const AddJobs = () => {
  return (
    <div>
      <h2 className="text-3xl">Add Jobs</h2>
      <form className="py-12">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Job Details</legend>

          <label className="label">Company Title</label>
          <input type="text" className="input" placeholder="title" />

          <label className="label">Company</label>
          <input type="text" className="input" placeholder="company" />

          <label className="label">Location</label>
          <input type="text" className="input" placeholder="location" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
