function Container({ children, className }) {
  return (
    <div
      className={` bg-[#181b22] flex flex-col md:flex-row items-start justify-center text-white gap-4 pt-20 px-4  ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
