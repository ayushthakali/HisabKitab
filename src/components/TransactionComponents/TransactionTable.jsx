import HandleDelete from "./HandleDelete";
import HandleEdit from "./HandleEdit";
import { useState } from "react";
import PaginationControls from "../PaginationControls";

function TransactionTable({
  transactions,
  onRowClick,
  isSelected,
  isDashboard,
}) {
  const headerElement = ["Category", "Date", "Amount", "Actions"];
  const [currentPage, setCurrentPage] = useState(1);
  const totalRows = 7;
  const totalPages = Math.ceil(transactions.length / totalRows);

  const startIndex = (currentPage - 1) * totalRows;
  const endIndex = startIndex + totalRows;

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const header = headerElement.map((title) => {
    if (title === "Actions" && isDashboard) {
      return;
    }

    return (
      <th className="px-4 py-2" key={title}>
        {title}
      </th>
    );
  });

  const renderedTransactions = transactions
    .slice()
    .reverse()
    .slice(startIndex, endIndex)
    .map((transaction) => {
      return (
        <tr
          key={transaction.id}
          onClick={() => onRowClick?.(transaction.id)}
          className={`cursor-pointer bg-[#1f232c] text-gray-300
            ${isSelected === transaction.id ? "bg-indigo-400 text-white" : ""}`}
        >
          <td className="px-5 py-2 ">{transaction.category}</td>
          <td className="px-5 py-2 ">{transaction.date}</td>
          <td className="px-5 py-2 text-left">
            Rs.{transaction.amount.toLocaleString("en-IN")}
          </td>
          {!isDashboard && (
            <td className="px-4 py-2 flex justify-center items-center gap-1 mt-1 ">
              <HandleEdit transaction={transaction} />
              <HandleDelete transactionId={transaction.id} />
            </td>
          )}
        </tr>
      );
    });

  const emptyRowCount = isDashboard ? 5 - transactions.length  : totalRows - (transactions.length - startIndex)
    
  return (
    <>
      <table className="table-auto border border-collapse w-full text-center">
        <thead className=" bg-[#2a2d3a] ">
          <tr>{header}</tr>
        </thead>
        <tbody>
          {renderedTransactions}
          {Array.from({ length: emptyRowCount }, (_, index) => {
            return (
              <tr key={index} className="bg-[#1f232c]">
                <td className="px-5 py-2 ">&nbsp;</td>
                <td className="px-5 py-2 ">&nbsp;</td>
                <td className="px-5 py-2 ">&nbsp;</td>
                <td className="px-4 py-2 ">&nbsp;</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationControls isDashboard={isDashboard} handleNext={handleNext} handlePrev={handlePrev} currentPage={currentPage} totalPages={totalPages}/>
    </>
  );
}

export default TransactionTable;

// &nbsp;-nonbreaking space
