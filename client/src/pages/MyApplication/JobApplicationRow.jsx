import React from "react";

const JobApplicationRow = ({ apply, index }) => {
  const { github, applicant } = apply;
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{github}</td>
        <td>{applicant}</td>
        <td>Blue</td>
      </tr>
    </div>
  );
};

export default JobApplicationRow;
