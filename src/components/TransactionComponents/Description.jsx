import { MdOutlineDescription } from "react-icons/md";

function Description({ isSelected, selectedTransaction }) {
  return (
    <div
      className={`bg-white shadow-lg shadow-indigo-200 rounded-lg p-6 w-1/4 flex min-h-[30rem] h-fit min-w-97 transition-all ${
        isSelected ? "" : "items-center justify-center"
      }`}
    >
      {isSelected ? (
        <div className=" text-lg p-5 border border-indigo-300 rounded-lg w-full">
          <h1 className="text-3xl font-semibold mb-4 border-b border-indigo-300 pb-4">
            Note:
          </h1>
          {selectedTransaction?.description ? (
            selectedTransaction.description
          ) : (
            <p>No Description Added!!!</p>
          )}
        </div>
      ) : (
        <div className="border border-indigo-200 rounded-lg p-8 flex flex-col items-center gap-5">
          <h1 className="text-xl font-semibold ">Description is shown here.</h1>
          <MdOutlineDescription className="h-20 w-20 text-gray-300" />
        </div>
      )}
    </div>
  );
}

export default Description;
