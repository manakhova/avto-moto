import {ActionType} from './action';

const initialState = {
  photo: 1,
  currentSection: `features`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PHOTO:
      return {
        ...state,
        photo: action.payload
      };
      case ActionType.CHANGE_SECTION:
      return {
        ...state,
        currentSection: action.payload
      };
    default:
      return state;
  }
};


export {reducer};