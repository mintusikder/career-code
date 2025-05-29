import React, { Suspense } from "react";
import MyApplicationDetails from "./MyApplicationDetails";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../hook/useAuth";
import { myApplicationPromise } from "../../api/applicationApi";


const MyApplication = () => {
  const { user } = useAuth();
  return (
    <div>
      <MyApplicationDetails></MyApplicationDetails>
      <Suspense fallback={"Loading----"}>
        <MyApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></MyApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
