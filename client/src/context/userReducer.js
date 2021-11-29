import { GET_USERS, FILTER_USERS, CLEAR_FILTER, SET_CURRENT } from "./types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, "gi");
          let itemString;
          if (user.items.length > 0) {
            itemString = user.items.join(" ");
          }
          return (
            user.name.match(regex) ||
            user.userid.match(regex) ||
            user.address.match(regex) ||
            user.pincode.match(regex) ||
            itemString.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};
