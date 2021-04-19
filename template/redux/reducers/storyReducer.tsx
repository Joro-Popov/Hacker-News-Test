import StoryConstants from '../constants/StoryConstants';
import {StoryReducer} from '../../interfaces/StoryInterfaces';

const INITIAL_STATE: StoryReducer = {
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
