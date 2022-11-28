const Alert = ({type, text}) => {
  return (
    <div
      className={
        "fixed p-4 mb-4 z-1000 top-10 left-0 right-0 text-sm rounded-lg" +
        (type === "success"
          ? " text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          : " bg-red-100 dark:bg-red-200 dark:text-red-800")
      }
    >
      <span class="font-medium">{text}</span>
    </div>
  );
};

export default Alert;
