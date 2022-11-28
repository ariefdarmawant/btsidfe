import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import JwtService from "../services/jwt.service";
import TweetService from "../services/tweet.service";
import AvatarElement from "../components/AvatarElement";
import Layout from "../components/layout";
import PostTweet from "../components/post-tweet";
import Tweet from "../components/tweet";

const Feeds = () => {
  const navigate = useNavigate();
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    setTweets(await TweetService.getTweets());
  };
  const postTweet = async () => {
    await TweetService.postTweets(tweet, JwtService.getUser().id);
    getTweets();
    setTweet("");
  };

  const [sortAscending, setSortAscending] = useState(1);

  const sortByTimestamp = useMemo(() => {
    if(!search && tweets) {
      const sortedTweets = tweets.sort((a, b) =>
        sortAscending
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTweets(sortedTweets);
    } else{
      if(filteredTweets){
      const sortedTweets = filteredTweets.sort((a, b) =>
        sortAscending
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFilteredTweets(sortedTweets);
      }
    }
  }, [sortAscending, tweets, filteredTweets]);

  const filterTweets = useMemo(() => {
    if (search) {
      setFilteredTweets(tweets.filter((obj) => obj.text.includes(search)));
    }
  }, [search, tweets]);

  useEffect(() => {
    console.log(filteredTweets)
  },[filteredTweets])

  const convertTime = (date) => {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    return `${day}-${month}-${year} ${hour}:${min}:${sec}`;
  };

  const onDelete = async (id) => {
    await TweetService.deleteTweet(id);
    getTweets();
  };

  const onEdit = async (id, text) => {
    await TweetService.editTweet(id, text);
    getTweets();
  };

  return (
    <Layout>
      <div className="border-x-[1px] w-screen sm:w-full pb-16 sm:pb-0">
        <section className="sticky top-0 px-4 py-6 bg-white flex flex-row items-center gap-4">
          <div className="block sm:hidden">
            <AvatarElement
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              header
              alt="Profile"
            />
          </div>
          <h1 className="text-[1.25rem] font-bold">Home</h1>
        </section>
        <PostTweet
          tweet={tweet}
          setTweet={setTweet}
          postTweet={postTweet}
          sortAscending={sortAscending}
          setSortAscending={setSortAscending}
        />
        <input
          type="text"
          placeholder="search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <section>
          {search
            ? filteredTweets &&
              filteredTweets.map((n, index) => (
                <Tweet
                  name={n.author.name}
                  username={n.author.username}
                  time={convertTime(new Date(n.createdAt))}
                  text={n.text}
                  comment={n.commentCount}
                  key={index}
                  id={n.id}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))
            : tweets &&
              tweets.map((n, index) => (
                <Tweet
                  name={n.author.name}
                  username={n.author.username}
                  time={convertTime(new Date(n.createdAt))}
                  text={n.text}
                  comment={n.commentCount}
                  key={index}
                  id={n.id}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))}
        </section>
      </div>
    </Layout>
  );
};

export default Feeds;
