export interface StoryDetails {
  title: string;
  url: string;
  time: number;
  score: string;
  by: string;
}

export interface AuthorDetails {
  karma: string;
}

export interface Story {
  title: string;
  url: string;
  timestamp: number;
  storyScore: number;
  authorId: string;
  authorKarmaScore: string;
}

export interface StoryReducer {
  [stories: string]: Array<Story>;
}
