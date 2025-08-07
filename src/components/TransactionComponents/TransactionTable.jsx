import HandleDelete from "./HandleDelete";
import HandleEdit from "./HandleEdit";

function TransactionTable({
  transactions,
  onRowClick,
  isSelected,
  showActions,
}) {
  const headerElement = ["Category", "Date", "Amount", "Actions"];

  const header = headerElement.map((title) => {
    if (title === "Actions" && !showActions) {
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
          <td className="px-5 py-2 ">{transaction.amount}</td>
          {showActions && (
            <td className="px-4 py-2 flex justify-center items-center gap-1 mt-1 ">
              <HandleEdit transaction={transaction} />{" "}
              <HandleDelete transactionId={transaction.id} />
            </td>
          )}
        </tr>
      );
    });

  return (
    <table className="table-auto border-collapse w-full text-center">
      <thead className=" bg-[#2a2d3a]">
        <tr>{header}</tr>
      </thead>
      <tbody>{renderedTransactions}</tbody>
    </table>
  );
}

export default TransactionTable;
