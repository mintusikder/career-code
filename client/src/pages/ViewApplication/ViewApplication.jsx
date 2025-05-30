import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
  const { job_id } = useParams();
  const application = useLoaderData();
  console.log(application)

  return (
    <div>
      <h3>Application for : {application.length}</h3>
    </div>
  );
};

export default ViewApplication;
