function Container({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center flex-col md:flex-row gap-4 pt-20 px-4">
        {children}
      </div>
  );
}

export default Container;
