import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

function TransactionTable({ transactions, onRowClick, isSelected }) {
  const headerElement = ["Category", "Date", "Amount", "Actions"];

  const header = headerElement.map((title) => {
    return (
      <th className="px-4 py-2 border-r border-indigo-300" key={title}>
        {title}
      </th>
    );
  });

  const renderedTransactions = transactions.map((transaction) => {
    return (
      <tr
        key={transaction.id}
        onClick={() => onRowClick(transaction.id)}
        className={`cursor-pointer ${
          isSelected === transaction.id ? "bg-gray-200" : ""
        }`}
      >
        <td className="px-4 py-2 border-r border-indigo-300">
          {transaction.category}
        </td>
        <td className="px-4 py-2 border-r border-indigo-300">
          {transaction.date}
        </td>
        <td className="px-4 py-2 border-r border-indigo-300">
          {transaction.amount}
        </td>
        <td className="px-4 py-2 flex justify-center gap-1 mt-1 ">
          <GrEdit /> <RiDeleteBinLine />
        </td>
      </tr>
    );
  });

  return (
    <table className="table-auto border border-indigo-300 border-collapse w-full text-center">
      <thead className="border-b border-indigo-300 bg-indigo-200">
        <tr>{header}</tr>
      </thead>
      <tbody>{renderedTransactions}</tbody>
    </table>
  );
}

export default TransactionTable;
