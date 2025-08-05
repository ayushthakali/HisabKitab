function Card({ children ,className}) {
  return (
    <div className={`flex flex-col items-end bg-white shadow-lg shadow-indigo-200 rounded-lg p-4 h-fit min-h-[30rem] w-full max-w-2xl p-7 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
