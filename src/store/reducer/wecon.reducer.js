import { ACC_WECON } from "../name.types/name.type";

const WECON_USER_DEFAULT = {
  weconUser: "",
};

export const quanlyWeConReducer = (
  state = WECON_USER_DEFAULT,
  { type, payload }
) => {
  switch (type) {
    case ACC_WECON:
      state.weconUser = payload;
      return { ...state };

    default:
      return state;
  }
};
