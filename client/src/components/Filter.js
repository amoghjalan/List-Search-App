import React, { useContext, useEffect, Fragment } from "react";
import User from "./User";
import UserContext from "../context/userContext";

const Filter = () => {
  const userContext = useContext(UserContext);

  const { users, filtered, getUsers, loading } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  if ((!users && !loading) || users.length === 0) {
    return (
      <ul className="options">
        <li>No Users Added!!</li>
      </ul>
    );
  }
  return (
    <Fragment>
      {users !== null && !loading ? (
        <ul className="options">
          {filtered !== null
            ? filtered.map((user, index) => (
                <User user={user} key={index} myid={index} />
              ))
            : users.map((user, index) => (
                <User user={user} key={index} myid={index} />
              ))}
        </ul>
      ) : (
        <h1>Loading....</h1>
      )}
    </Fragment>
  );
};

export default Filter;
