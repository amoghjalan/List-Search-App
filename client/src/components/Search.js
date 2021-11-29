import React, { useContext, useEffect, useRef } from "react";
import UserContext from "../context/userContext";

const Search = () => {
  const userContext = useContext(UserContext);
  const text = useRef("");
  const { users, filtered, current, filterUsers, clearFilter, setCurrent } =
    userContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterUsers(e.target.value);
    } else {
      clearFilter();
    }
  };

  const onKeyDown = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      setCurrent(0);
    } else if (e.keyCode === 38) {
      if (current === 0) {
        return;
      }
      setCurrent(current - 1);
    } else if (e.keyCode === 40) {
      if (
        (filtered && current === filtered.length - 1) ||
        current === users.length - 1
      ) {
        console.log(current);
        return;
      }

      setCurrent(current + 1);
    }
    console.log(current);
  };

  return (
    <div className="search">
      <input
        ref={text}
        type="text"
        className="search-box"
        placeholder="Filter Users..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Search;
