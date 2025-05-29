import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const MyApplicationList = ({ myApplicationPromise }) => {
  const application = use(myApplicationPromise);
  console.log(application);
  return (
    <div>
      <h3 className="text-3xl"> my application {application.length}</h3>

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
            {application.map((apply,index) => (
              <JobApplicationRow
                key={apply._id}
                index ={index}
                apply={apply}
              ></JobApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
