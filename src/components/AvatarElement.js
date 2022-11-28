const AvatarElement = ({ src, alt, header = false }) => {
  return (
    <div
      className={
        (header ? "w-7 h-7" : "w-12 h-12") + " overflow-hidden rounded-full"
      }
    >
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
};

export default AvatarElement;
