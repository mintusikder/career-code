import React, { Suspense } from 'react';
import useAuth from '../../hook/useAuth';
import PostedJobList from './PostedJobList';
import { jobsCreatedByPrimes } from '../../api/jobsApi';

const MyPostedJob = () => {
    const {user} = useAuth()

    return (
        <div>
            <h2>My Posted Jobs: </h2>
            <Suspense fallback={"loading---"}>
                <PostedJobList jobsCreatedByPrimes={jobsCreatedByPrimes(user.email)}>

                </PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;