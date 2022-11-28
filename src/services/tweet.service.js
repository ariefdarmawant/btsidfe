import api from "./api";

const TweetService = {
  getTweets: async () => {
    return (await api.get("/tweets")).data.tweets;
  },

  getTweetById: async (id) => {
    return await api.get("/tweets/" + id);
  },

  postTweets: async (text, id) => {
    return api.post("/tweets/", {
      text,
      userId: id,
    });
  },

  deleteTweet: async (id) => {
    return api.delete("/tweets/" + id);
  },

  editTweet: async (id, text) => {
    return api.patch("/tweets/" + id, {
      text,
    });
  },
};

export default TweetService;
