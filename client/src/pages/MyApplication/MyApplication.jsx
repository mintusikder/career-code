import React, { Suspense } from "react";
import MyApplicationDetails from "./MyApplicationDetails";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../hook/useAuth";

const myApplicationPromise = (email) => {
  return fetch(`http://localhost:3000/application?email=${email}`).then((res) =>
    res.json()
  );
};

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
