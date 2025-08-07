import { useEffect } from "react";
import Container from "../components/Container";
import DashboardHeader from "../components/DashboardHeader";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import useTransactionContext from "../hooks/use-context-transaction";
import TransactionTable from "../components/TransactionComponents/TransactionTable";

function Dashboard() {
  const { fetchTransactions, transactions } = useTransactionContext();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Container className="!flex-col !px-22 gap-12">
      <div className="flex justify-around w-full flex-wrap gap-2">
        <DashboardHeader transactions={transactions}/>
      </div>

      <AddEditSkeleton
        title="Recent Transactions.."
        className="!bg-[#1f232c] rounded-lg ml-6 !pt-16 !px-1"
      >
        <div className="mt-4 p-3 w-full overflow-x-auto">
          <TransactionTable transactions={transactions.slice(-5)} />
        </div>
      </AddEditSkeleton>
    </Container>
  );
}

export default Dashboard;
