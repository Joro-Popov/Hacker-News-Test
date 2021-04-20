import StoryActions from '../constants/StoryConstants';
import StoryService from '../../services/StoryService';
import {Story} from '../../interfaces/StoryInterfaces';

function setStoriesSuccess(stories: Array<Story>) {
  return {
    type: StoryActions.SET_TOP_STORIES,
    payload: stories,
  };
}

function setIsLoadingSuccess(isLoading: boolean) {
  return {
    type: StoryActions.SET_IS_LOADING,
    payload: isLoading,
  };
}

export const setStories = () => async (dispatch: any): Promise<void> => {
  dispatch(setIsLoadingSuccess(true));
  const stories = await StoryService.getRandomTenStories();

  dispatch(setStoriesSuccess(stories));
  dispatch(setIsLoadingSuccess(false));
};
