function Card({ children ,className}) {
  return (
    <div className={`flex flex-col items-end bg-white shadow-lg shadow-indigo-200 rounded-lg p-9 h-fit min-h-[30rem] w-full max-w-3xl ${className}`}>
      {children}
    </div>
  );
}

export default Card;
