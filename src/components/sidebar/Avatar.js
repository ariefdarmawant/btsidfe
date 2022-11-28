import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JwtService from "../../services/jwt.service";
import AvatarElement from "../AvatarElement";

const Avatar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => setUser(await JwtService.getUser());
    fetchUser();
  }, []);

  const onLogout = async() =>{
    await JwtService.removeUser();
    navigate("/login")
  }

  return (
    <div className="flex items-center justify-between xl:w-[17rem] hover:bg-neutral-200 xl:px-4 px-3 py-3 rounded-full hover-transition cursor-pointer">
      <div className="flex items-center gap-4" onClick={onLogout}>
        <AvatarElement
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile"
        />
        <div className="xl:block hidden">
          <h1 className="font-bold text-lg">{user.name}</h1>
          <h2 className="text-neutral-500 -mt-1">@{user.username}</h2>
        </div>
      </div>
      <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 xl:block hidden" />
    </div>
  );
};

export default Avatar;
