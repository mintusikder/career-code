import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const  {title,company} = useLoaderData()
    return (
       <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{company}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
    </div>
  </div>
</div>
    );
};

export default JobDetails;