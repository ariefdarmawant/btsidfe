const Header = ({ name, username, time }) => {
    return (
      <div className="flex gap-1 items-center">
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-neutral-500 hidden mobile:block">@{username}</h2>
        <span className="text-neutral-500">•</span>
        <h2 className="text-neutral-500">{time}</h2>
      </div>
    )
  }

  export default Header;