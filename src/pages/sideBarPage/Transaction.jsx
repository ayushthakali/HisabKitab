import { MdOutlineDescription } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../context/contextTransaction";
import TransactionTable from "../../components/TransactionTable";

function Transaction() {
  const { fetchTransactions, transactions } = useContext(TransactionContext);
  const [isSelected, setIsSelected] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleClick = (id) => {
    setIsSelected(id);
    setDesc(transactions.find((transaction) => transaction.id == id));
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-start justify-center flex-col md:flex-row gap-4 pt-20 px-4">
      <div className="flex flex-col items-end bg-white shadow-lg shadow-indigo-200 rounded-lg p-4 w-1/2 h-fit min-h-[30rem] w-1/2 min-w-97 p-7">
        <div className="flex justify-between w-full p-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-gray-800">Transactions...</h1>
          <button className="border p-1 rounded bg-indigo-500 text-white cursor-pointer shadow transition-colors hover:bg-indigo-700 mt-1">
            +Add Transaction
          </button>
        </div>
        <div className="mt-4 p-3 w-full overflow-x-auto">
          <TransactionTable
            transactions={transactions}
            onRowClick={handleClick}
            isSelected={isSelected}
          />
        </div>
      </div>
      <div
        className={`bg-white shadow-lg shadow-indigo-200 rounded-lg p-6 w-1/4 flex min-h-[30rem] h-fit min-w-97 ${
          isSelected ? "" : "items-center justify-center"
        }`}
      >
        {isSelected ? (
          <div className=" text-xl font-semibold text-gray-800 p-5 ">
            <h1 className="text-3xl font-bold text-gray-800">Note:</h1>
            {desc.description}
          </div>
        ) : (
          <div className="border border-indigo-200 rounded-lg p-8 flex flex-col items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-800 h-1/2">
              Description
            </h1>
            <MdOutlineDescription className="h-20 w-20 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Transaction;
