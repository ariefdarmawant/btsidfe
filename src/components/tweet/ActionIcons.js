import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../Icons"
import SmallIcon from "../SmallIcon"

const ActionIcons = ({ replies, retweets, likes, onDelete, toggleEdit, id}) => {
    return (
      <div className="flex justify-between mt-3 max-w-md cursor-pointer">
        <div className="flex items-center group tablet:pr-4">
          <SmallIcon
            Icon={<ReplyIcon fill="group-hover:fill-sky-500" />}
            color="group-hover:bg-sky-100"
          />
          <p className="text-xs group-hover:text-sky-500">{replies}</p>
        </div>
        <div className="flex gap-1 items-center group tabletpx-4">
          <SmallIcon
            Icon={<RetweetIcon fill="group-hover:fill-green-500" />}
            color="group-hover:bg-green-100"
          />
          <p className="text-xs group-hover:text-green-500">{retweets}</p>
        </div>
        <div className="flex gap-1 items-center group tabletpx-4">
          <SmallIcon
            Icon={<LikeIcon fill="group-hover:fill-rose-500" />}
            color="group-hover:bg-rose-100"
          />
          <p className="text-xs group-hover:text-rose-500">{likes}</p>
        </div>
        <div className="flex gap-1 items-center group tabletpl-4">
          <SmallIcon
            Icon={<ShareIcon fill="group-hover:fill-sky-500" />}
            color="group-hover:bg-sky-100"
          />
        </div>
        <button className="flex gap-1 items-center group tabletpl-4" onClick={() => onDelete(id)}>
          <SmallIcon
            Icon={<TrashIcon  className="group-hover:text-red-500"/>}
            color="group-hover:bg-red-100"
          />
        </button>
        <div className="flex gap-1 items-center group tabletpl-4" onClick={() => toggleEdit(true)}>
          <SmallIcon
            Icon={<PencilIcon  className="group-hover:text-blue-500"/>}
            color="group-hover:bg-blue-100"
          />
        </div>
      </div>
    )
  }

  export default ActionIcons;