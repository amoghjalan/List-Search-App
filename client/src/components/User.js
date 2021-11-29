import React, { Fragment, useContext } from "react";
import UserContext from "../context/userContext";

const User = ({ user, myid }) => {
  const { userid, name, address, pincode } = user;
  const userContext = useContext(UserContext);
  const { current } = userContext;

  return (
    <Fragment>
      <li className={myid === current ? "option-active" : ""}>
        <p>{userid}</p>
        <p>{name}</p>
        <p>
          {address} -{pincode}
        </p>
      </li>
    </Fragment>
  );
};

export default User;
