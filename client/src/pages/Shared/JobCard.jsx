import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {

  const {
    description,
    category,
    jobType,
    location,
    title,
    company,
    company_logo,
    _id,
  } = job;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src={company_logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <Link to={`/job/${_id}`} className="btn">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
