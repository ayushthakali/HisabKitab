
function AddEditForm({ handleSubmit, children }) {
  return (
    <form className="w-full h-full px-2 py-2" onSubmit={handleSubmit}>
      {children}
      <button
        type="submit"
        className="w-full py-2 rounded-md bg-indigo-500 text-white font-semibold shadow transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2 cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default AddEditForm;
