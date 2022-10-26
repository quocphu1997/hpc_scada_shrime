import {
  DT_BL_EX1,
  DT_BL_EX2,
  DT_BL_EX3,
  DT_BL_EX4,
  DT_BL_EX5,
  DT_BL_EX6,
  DT_IN1,
  DT_IN2,
  DT_IN3,
  DT_IN4,
  DT_IN5,
  DT_IN6,
  DT_MT1,
  DT_MT2,
  DT_MT3,
  DT_MT4,
  DT_OUT1,
  DT_OUT2,
  DT_OUT3,
  DT_OUT4,
  DT_OUT5,
  DT_OUT6,
  DT_SS1,
  DT_TT,
  DT_VDV,
  DT_VUV,
  DT_XT,
} from "../name.types/name.type";

const DOITUONG_DEFAULT = {
  pump: {
    mt1: false,
    mt2: false,
    mt3: false,
    mt4: false,
  },
  van_kxln: {
    vdv: false,
    vUv: false,
    bl: {
      in: {
        in1: false,
        in2: false,
        in3: false,
        in4: false,
        in5: false,
        in6: false,
      },
      out: {
        out1: false,
        out2: false,
        out3: false,
        out4: false,
        out5: false,
        out6: false,
      },
      ex: {
        ex1: false,
        ex2: false,
        ex3: false,
        ex4: false,
        ex5: false,
        ex6: false,
      },
    },
  },
  van_xa_kxln: {
    xa_smrt: false,
    xa_2m3: false,
    xa_uv: false,
    xa_blg: false,
  },
  van_kcn: {
    van_ss1: false,
    van_xatran: false,
    van_tt: false,
  },
};

export const quanlyDoiTuongReducer = (
  state = DOITUONG_DEFAULT,
  { type, payload }
) => {
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
    case DT_VDV: {
      state.van_kxln.vdv = payload;
      return { ...state };
    }
    case DT_VUV: {
      state.van_kxln.vUv = payload;
      return { ...state };
    }
    case DT_SS1: {
      state.van_kcn.van_ss1 = payload;
      return { ...state };
    }
    case DT_XT: {
      state.van_kcn.van_xatran = payload;
      return { ...state };
    }
    case DT_TT: {
      state.van_kcn.van_tt = payload;
      return { ...state };
    }
    case DT_IN1: {
      state.van_kxln.bl.in.in1 = payload;
      return { ...state };
    }
    case DT_IN2: {
      state.van_kxln.bl.in.in2 = payload;
      return { ...state };
    }
    case DT_IN3: {
      state.van_kxln.bl.in.in3 = payload;
      return { ...state };
    }
    case DT_IN4: {
      state.van_kxln.bl.in.in4 = payload;
      return { ...state };
    }
    case DT_IN5: {
      state.van_kxln.bl.in.in5 = payload;
      return { ...state };
    }
    case DT_IN6: {
      state.van_kxln.bl.in.in6 = payload;
      return { ...state };
    }
    case DT_OUT1: {
      state.van_kxln.bl.out.out1 = payload;
      return { ...state };
    }
    case DT_OUT2: {
      state.van_kxln.bl.out.out2 = payload;
      return { ...state };
    }
    case DT_OUT3: {
      state.van_kxln.bl.out.out3 = payload;
      return { ...state };
    }
    case DT_OUT4: {
      state.van_kxln.bl.out.out4 = payload;
      return { ...state };
    }
    case DT_OUT5: {
      state.van_kxln.bl.out.out5 = payload;
      return { ...state };
    }
    case DT_OUT6: {
      state.van_kxln.bl.out.out6 = payload;
      return { ...state };
    }
    case DT_BL_EX1: {
      state.van_kxln.bl.ex.ex1 = payload;
      return { ...state };
    }
    case DT_BL_EX2: {
      state.van_kxln.bl.ex.ex2 = payload;
      return { ...state };
    }
    case DT_BL_EX3: {
      state.van_kxln.bl.ex.ex3 = payload;
      return { ...state };
    }
    case DT_BL_EX4: {
      state.van_kxln.bl.ex.ex4 = payload;
      return { ...state };
    }
    case DT_BL_EX5: {
      state.van_kxln.bl.ex.ex5 = payload;
      return { ...state };
    }
    case DT_BL_EX6: {
      state.van_kxln.bl.ex.ex6 = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
