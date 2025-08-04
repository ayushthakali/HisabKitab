import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import TransactionContext from "../../context/contextTransaction";
import TransactionTable from "../../components/TransactionTable";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Description from "../../components/Description";

function Transaction() {
  const { fetchTransactions, transactions } = useContext(TransactionContext);
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
    <Container>
      <Card>
        <div className="flex justify-between w-full p-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-indigo-800">
            Transactions...
          </h1>
          <Link
            to="/add-transaction"
            className="border px-4 py-2 rounded bg-indigo-500 text-white cursor-pointer shadow transition-colors hover:bg-indigo-700 mt-1"
          >
            +Add Transaction
          </Link>
        </div>
        <div className="mt-4 p-3 w-full overflow-x-auto">
          <TransactionTable
            transactions={transactions}
            onRowClick={handleClick}
            isSelected={isSelected}
          />
        </div>
      </Card>
      <Description isSelected={isSelected} selectedTransaction={selectedTransaction}/>
    </Container>
  );
}

export default Transaction;
