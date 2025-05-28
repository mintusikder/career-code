import React from "react";
import { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
    </div>
  );
};

export default HotJobs;
