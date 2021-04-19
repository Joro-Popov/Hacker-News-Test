import StoryActions from '../constants/StoryConstants';
import StoryService from '../../services/StoryService';
import {Story} from '../../interfaces/StoryInterfaces';

function setStoriesSuccess(stories: Array<Story>) {
  return {
    type: StoryActions.SET_TOP_STORIES,
    payload: stories,
  };
}

export const setStories = () => async (dispatch: any): Promise<void> => {
  const stories = await StoryService.getRandomTenStories();

  dispatch(setStoriesSuccess(stories));
};
