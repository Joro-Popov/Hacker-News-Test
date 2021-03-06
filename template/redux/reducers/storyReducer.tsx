import StoryConstants from '../constants/StoryConstants';
import {Store} from '../../interfaces/StoryInterfaces';

const INITIAL_STATE: Store = {
  stories: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case StoryConstants.SET_TOP_STORIES: {
      return {
        ...state,
        stories: action.payload,
      };
    }
    case StoryConstants.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
