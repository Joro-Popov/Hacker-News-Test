const getRandomStories = (arr: any[], n: number) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

const getStoryDetails = async (storyId: number) => {
  const storyDetails = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());

  return storyDetails;
};

const getAuthorDetails = async (author: string) => {
  const authorDetails = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${author}.json`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());

  return authorDetails;
};

const getRandomTenStories = async () => {
  const allStories = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());

  let randomStoryIds = getRandomStories(allStories, 10);

  let result = [];

  for await (let storyId of randomStoryIds) {
    const storyDetails = await getStoryDetails(storyId);
    const authorDetails = await getAuthorDetails(storyDetails.by);

    const story = {
      title: storyDetails.title,
      url: storyDetails.url,
      timestamp: storyDetails.time,
      storyScore: Number(storyDetails.score),
      authorId: storyDetails.by,
      authorKarmaSource: authorDetails.karma,
    };

    result = [...result, story];
  }

  console.log(result)
  return result.sort((a, b) => Number(a.storyScore) - Number(b.storyScore));
};

export default {
  getRandomTenStories,
};
