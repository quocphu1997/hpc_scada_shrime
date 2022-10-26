import { DT_MT1, DT_MT2, DT_MT3, DT_MT4 } from "../name.types/name.type";

const DOITUONG_DEFAULT = {
  pump: {
    mt1: false,
    mt2: false,
    mt3: false,
    mt4: false,
  },
};

export const quanlyDoiTuongReducer = (state = DOITUONG_DEFAULT, { type, payload }) => {
  switch (type) {
    case DT_MT1:
      state.pump.mt1 = payload;
      return { ...state };
    case DT_MT2:
      state.pump.mt2 = payload;
      return { ...state };
    case DT_MT3:
      state.pump.mt3 = payload;
      return { ...state };
    case DT_MT4:
      state.pump.mt4 = payload;
      return { ...state };

    default:
      return state;
  }
};
