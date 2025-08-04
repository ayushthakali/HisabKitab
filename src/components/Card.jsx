function Card({ children }) {
  return (
    <div className="flex flex-col items-end bg-white shadow-lg shadow-indigo-200 rounded-lg p-4 w-1/2 h-fit min-h-[30rem] w-1/2 min-w-97 p-7">
      {children}
    </div>
  );
}

export default Card;
