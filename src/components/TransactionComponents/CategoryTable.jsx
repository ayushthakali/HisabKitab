import HandleDelete from "./HandleDelete";
import HandleEdit from "./HandleEdit";
import PaginationControls from "../PaginationControls";
import { useState } from "react";

function CategoryTable({ categories }) {
  const headerElement = ["Category", "Type", "Actions"];

  const [currentPage, setCurrentPage] = useState(1);
  const totalRows = 7;
  const totalPages = Math.ceil(categories.length / totalRows);

  const startIndex = (currentPage - 1) * totalRows;
  const endIndex = startIndex + totalRows;

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const header = headerElement.map((title) => {
    if (title !== "Actions") {
      return (
        <th className="px-4 py-2" key={title}>
          {title}
        </th>
      );
    }
    return (
      <th className="px-4 py-2 text-center" key={title}>
        {title}
      </th>
    );
  });

  const renderedCategories = categories.slice(startIndex,endIndex).map((category) => {
    return (
      <tr key={category.id} className="bg-[#1f232c] text-gray-300">
        <td className="px-4 py-2">{category.name}</td>
        <td className="px-4 py-2 ">
          <h1
            className={`inline-block w-1/2 text-white text-center rounded-md ${
              category.type === "Expense" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {category.type}
          </h1>
        </td>
        <td className="px-4 py-2 flex justify-center items-start gap-1 mt-1 ">
          <HandleEdit category={category} />
          <HandleDelete categoryId={category.id} />
        </td>
      </tr>
    );
  });

  return (<>
    <table className="table-auto w-full text-left -mt-2">
      <thead className=" bg-[#2a2d3a] ">
        <tr>{header}</tr>
      </thead>
      <tbody>{renderedCategories}</tbody>
    </table>
    <PaginationControls handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} totalPages={totalPages}/>
    </>
  );
}

export default CategoryTable;
