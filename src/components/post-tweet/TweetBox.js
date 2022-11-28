const TweetBox = ({ tweet, setTweet }) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="What's happening?"
        className="w-full text-[1.25rem] border-none focus:ring-0"
        onChange={(e) => setTweet(e.target.value)}
        value={tweet}
      />
    </div>
  );
};

export default TweetBox;
