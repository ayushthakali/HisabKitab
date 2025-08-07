import { MdOutlineDescription } from "react-icons/md";

function Description({ isSelected, selectedTransaction }) {
  return (
    <div
      className={`bg-[#1f232c] rounded-lg p-6 w-1/4 flex min-h-110 h-full min-w-90 transition-all ${
        isSelected ? "" : "items-center justify-center"
      }`}
    >
      {isSelected ? (
        <div className=" text-lg p-5 border border-indigo-300 rounded-lg w-full text-gray-300">
          <h1 className="text-3xl font-semibold mb-4 border-b border-indigo-300 pb-4 ">
            Note:
          </h1>
          {selectedTransaction?.description ? (
            selectedTransaction.description
          ) : (
            <p className="text-gray-400 ">No Description Added!!!</p>
          )}
        </div>
      ) : (
        <div className="border border-indigo-300 rounded-lg p-6 flex flex-col items-center justify-center min-h-100 gap-5">
          <h1 className="text-xs font-semibold text-gray-400 ">Click on a transaction to see its description..</h1>
          <MdOutlineDescription className="h-19 w-19 text-gray-500" />
        </div>
      )}
    </div>
  );
}

export default Description;
