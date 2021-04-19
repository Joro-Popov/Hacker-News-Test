import StoryActions from '../constants/StoryConstants';
import StoryService from '../../services/StoryService';

function setStoriesSuccess(stories: any[]) {
  return {
    type: StoryActions.SET_TOP_STORIES,
    payload: stories,
  };
}

export const setStories = () => async (dispatch: any) => {
  // call service to get stories
  const stories = await StoryService.getRandomTenStories();

  dispatch(setStoriesSuccess(stories));
};
