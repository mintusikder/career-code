import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hook/useAuth";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(user);
  const handelApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkin = form.linkin.value;
    const resume = form.resume.value;

    const jobApplication = {
      jobId,
      applicant: user.email,
      github,
      linkin,
      resume,
    };
    console.log(jobApplication)
    axios
      .post("http://localhost:3000/application", jobApplication)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3 className="text-4xl">Apply Jobs : {jobId}</h3>
      <form onSubmit={handelApplySubmit} className="py-12">
        <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Github Link</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="github"
          />

          <label className="label">LinkIn Link</label>
          <input
            name="linkin"
            type="url"
            className="input"
            placeholder="LinkIn"
          />

          <label className="label">Resume</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume"
          />
          <input className="btn" type="submit" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
