import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsCreatedByPrimes }) => {
  const jobs = use(jobsCreatedByPrimes);
  return (
    <div>
      <h2>Jobs : {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
           
            {jobs.map((job,index) => (
              <tr key={job._id}>
                <th>{index +1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.company}</td>
                <td><Link to={`/viewApplication/${job._id}`}>View Application</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobList;
