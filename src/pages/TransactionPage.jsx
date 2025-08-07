import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTransactionContext from "../hooks/use-context-transaction";
import TransactionTable from "../components/TransactionComponents/TransactionTable";
import Container from "../components/Container";
import Card from "../components/Card";
import Description from "../components/TransactionComponents/Description";

function Transaction() {
  const { fetchTransactions, transactions } = useTransactionContext();
  const [isSelected, setIsSelected] = useState("");
  const [selectedTransaction, setselectedTransaction] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleClick = (id) => {
    setIsSelected(id);
    setselectedTransaction(
      transactions.find((transaction) => transaction.id === id)
    );
  };

  return (
    <Container className="pt-28">
      <Card className="max-w-2xl -mt-7">
        <div className="flex justify-between w-full p-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-white">
            Transactions...
          </h1>
          <Link
            to="/transaction/add"
            className=" px-4 py-2 rounded-md bg-indigo-500 text-white cursor-pointer shadow transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-1"
          >
            +Add Transaction
          </Link>
        </div>
        <div className="mt-4 p-3 w-full overflow-x-auto">
          <TransactionTable
            transactions={transactions}
            onRowClick={handleClick}
            isSelected={isSelected}
            showActions={true}
          />
        </div>
      </Card>
      <Description isSelected={isSelected} selectedTransaction={selectedTransaction}/>
    </Container>
  );
}

export default Transaction;
