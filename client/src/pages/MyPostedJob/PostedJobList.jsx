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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            {jobs.map((job,index) => (
              <tr key={job._id}>
                <th>{index +1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.company}</td>
                <td><Link to={`/application/${job._id}`}>View Application</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobList;
