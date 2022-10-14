import { USER_LOGIN } from "../name.types/name.type";

const STATE_WECON_DEFAULT = {
  userlogin: [],
};

export const weconReducer = (
  state = STATE_WECON_DEFAULT,
  { type, payload }
) => {
  switch (type) {
    case USER_LOGIN:{
      state.userlogin = payload
    }
    default:
      return state;
  }
};
