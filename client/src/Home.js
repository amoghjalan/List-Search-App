import React from "react";
import UserState from "./context/userState";
import Users from "./components/Users";
const Home = () => {
  return (
    <UserState>
      <Users />
    </UserState>
  );
};

export default Home;
