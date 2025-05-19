import { SET_BG_COLOR, SET_TEXT_COLOR } from './actions';

const initialState = {
  bgColor: '',
  textColor: '',
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BG_COLOR:
      return { ...state, bgColor: action.payload };
    case SET_TEXT_COLOR:
      return { ...state, textColor: action.payload };
    default:
      return state;
  }
};
