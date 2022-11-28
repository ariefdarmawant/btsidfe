import { BellIcon, MailIcon, SearchIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Link from "../sidebar/Link";

const Navbar = () => {
  return (
    <div className="fixed w-full justify-between bg-white bottom-0 z-[999] flex flex-row px-8">
      <Link Icon={HomeIcon} />
      <Link Icon={SearchIcon} />
      <Link Icon={BellIcon} />
      <Link Icon={MailIcon} />
    </div>
  );
};

export default Navbar;
