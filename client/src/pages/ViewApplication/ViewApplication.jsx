import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
  const { job_id } = useParams();
  const application = useLoaderData();
  console.log(application);
  const handelStatusChange = (e,application) =>{
    console.log(e.target.value,application)
  }

  return (
    <div>
      <h3>Application for : {application.length}</h3>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite </th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {application.map((job, index) => (
            <tr key={job._id}>
              <th>{index + 1}</th>
              <td>{job.applicant}</td>
              <td>{job.jobId}</td>
              <td>{job.jobId}</td>
              <select onChange={(e) =>handelStatusChange(e,application)} defaultValue={application.status} className="select">
                <option disabled={true}>Pick a color</option>
                <option>Painding</option>
                <option>Review</option>
                <option>Reject</option>
              </select>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplication;
