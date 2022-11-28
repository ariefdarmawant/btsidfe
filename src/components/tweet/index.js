import { useEffect, useState } from "react";
import AvatarElement from "../AvatarElement";
import ActionIcons from "./ActionIcons";
import Header from "./Header";

const Tweet = ({
  text,
  name,
  username,
  time,
  comment,
  onDelete,
  onEdit,
  id,
}) => {
  const [editting, setEditting] = useState(false);
  const [input, setInput] = useState(text);

  const onEditButton = () =>{
    onEdit(id,input)
    setEditting(false);
  }

  console.log(time);

  useEffect(() => {
    setInput(text);
  },[text])

  return (
    <div className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
      <div className="grid grid-cols-[auto,1fr] gap-3">
        <AvatarElement
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile"
        />
        <div>
          <Header name={name} username={username} time={time} />
          {editting ? (
            <div className="flex flex-row justify-between">
              <input value={input} onChange={(e) => setInput(e.target.value)} />
              <button onClick={onEditButton}>Send</button>
            </div>
          ) : (
            <p>{text}</p>
          )}
          <ActionIcons
            replies={comment}
            retweets={0}
            likes={0}
            onDelete={onDelete}
            toggleEdit={setEditting}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
