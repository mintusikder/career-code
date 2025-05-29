import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const  {title,company,_id} = useLoaderData()
    return (
       <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{company}</p>
    <div className="card-actions justify-end">
      <Link to={`/jobApply/${_id}`} className="btn btn-primary">Apply Now</Link>
    </div>
  </div>
</div>
    );
};

export default JobDetails;