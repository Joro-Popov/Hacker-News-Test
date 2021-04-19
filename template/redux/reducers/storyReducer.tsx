import StoryConstants from '../constants/StoryConstants';

const INITIAL_STATE = {
  stories: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case StoryConstants.SET_TOP_STORIES: {
      return {
        ...state,
        stories: action.payload,
      };
    }
    default:
      return state;
  }
};
