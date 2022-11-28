import {
  SortAscendingIcon,
  SortDescendingIcon,
} from "@heroicons/react/outline";
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "../Icons";
import SmallIcon from "../SmallIcon";

const ActionIcons = ({ postTweet, sortAscending, setSortAscending }) => {
  const onClickSort = () => {
    setSortAscending((prev) => !prev);
  };
  return (
    <>
      <div className="sm:flex items-center hidden ">
        <SmallIcon
          Icon={<MediaIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={<GifIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={<PollIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={<EmojiIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={<ScheduleIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={<LocationIcon fill="fill-sky-500" />}
          color="hover:bg-sky-100"
        />
        <SmallIcon
          Icon={
            !sortAscending ? (
              <SortAscendingIcon fill="fill-sky-500" onClick={onClickSort}/>
            ) : (
              <SortDescendingIcon fill="fill-sky-500" onClick={onClickSort}/>
            )
          }
          color="hover:bg-sky-100"
        />
      </div>
      <button
        className="bg-sky-500 hover:bg-sky-400 hover-transition px-5 py-2 text-white font-bold rounded-full w-full sm:w-auto"
        onClick={() => postTweet()}
      >
        Tweet
      </button>
    </>
  );
};
export default ActionIcons;
