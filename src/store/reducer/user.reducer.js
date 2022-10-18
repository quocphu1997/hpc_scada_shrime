import { LOGIN_USER, USER_ACCOUNTS } from "../name.types/name.type";

let userAccs = localStorage.getItem(USER_ACCOUNTS);

if (userAccs) {
  userAccs = JSON.parse(userAccs);
}
const USER_DEFAULT = {
  userAc: userAccs,
};

export const quanlyUserReducer = (state = USER_DEFAULT, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
      state.userAc = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
