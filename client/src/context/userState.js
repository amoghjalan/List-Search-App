import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { GET_USERS, FILTER_USERS, CLEAR_FILTER, SET_CURRENT } from "./types";

const UserState = props => {
  const initialState = {
    users: null,
    current: -1,
    filtered: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get User
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/users");

      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    } catch (err) {
      console.log("Error");
    }
  };

  // Filter User
  const filterUsers = text => {
    dispatch({ type: FILTER_USERS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set Current
  const setCurrent = keycode => {
    dispatch({ type: SET_CURRENT, payload: keycode });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        filtered: state.filtered,
        current: state.current,
        getUsers,
        filterUsers,
        clearFilter,
        setCurrent
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
