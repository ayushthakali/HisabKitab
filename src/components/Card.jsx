function Card({ children, className }) {
  return (
    <div
      className={`flex flex-col items-end rounded-lg w-full max-w-3xl p-9 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
