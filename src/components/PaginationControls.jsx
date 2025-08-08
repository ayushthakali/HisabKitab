import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";

function PaginationControls({
  isDashboard,
  handleNext,
  currentPage,
  handlePrev,
  totalPages,
}) {
  return (
    <>
      {!isDashboard && (
        <div className="flex items-center gap-2 px-3 mt-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="disabled:text-gray-500 cursor-pointer"
          >
            <TbPlayerTrackPrev className="h-7 w-7" />
          </button>
          <h1 className="text-gray-400">
            Page {currentPage} of {totalPages}
          </h1>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="disabled:text-gray-500 cursor-pointer"
          >
            <TbPlayerTrackNext className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
}

export default PaginationControls;
