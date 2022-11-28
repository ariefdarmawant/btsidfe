import AvatarElement from "../AvatarElement"
import ActionIcons from "./ActionIcons"
import TweetBox from "./TweetBox"

const PostTweet = ({tweet, setTweet, postTweet, sortAscending, setSortAscending}) => {
    return (
      <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 ">
        <AvatarElement
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile"
        />
        <div className="space-y-10 w-full">
          <TweetBox tweet={tweet} setTweet={setTweet}/>
          <div className="flex items-center justify-between gap-4">
            <ActionIcons postTweet={postTweet} sortAscending={sortAscending} setSortAscending={setSortAscending}/>
          </div>
        </div>
      </section>
    )
  }
  
  export default PostTweet