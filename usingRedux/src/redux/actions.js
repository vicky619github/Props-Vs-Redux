export const SET_BG_COLOR = 'SET_BG_COLOR';
export const SET_TEXT_COLOR = 'SET_TEXT_COLOR';

export const setBgColor = (color) => ({
  type: SET_BG_COLOR,
  payload: color,
});

export const setTextColor = (color) => ({
  type: SET_TEXT_COLOR,
  payload: color,
});
