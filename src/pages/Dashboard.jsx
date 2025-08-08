import { useEffect } from "react";
import Container from "../components/Container";
import DashboardHeader from "../components/DashboardHeader";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import useTransactionContext from "../hooks/use-context-transaction";
import TransactionTable from "../components/TransactionComponents/TransactionTable";
import TransactionBarChart from "../components/TransactionBarChart";

function Dashboard() {
  const { fetchTransactions, transactions } = useTransactionContext();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Container className="!flex-col !px-22 gap-12 -mt-8">
      <div className="flex justify-around w-full flex-wrap gap-2">
        <DashboardHeader transactions={transactions} />
      </div>

      <div className="flex w-full gap-8">
        <AddEditSkeleton
          title="Recent Transactions.."
          className="!bg-[#1f232c] rounded-lg !pt-16 !px-1 w-1/2 "
        >
          <div className="mt-4 p-3 w-full overflow-x-auto">
            <TransactionTable transactions={transactions.slice(-5)} isDashboard={true} />
          </div>
        </AddEditSkeleton>

        <AddEditSkeleton
          title="Income vs Expense"
          className="!bg-[#1f232c] rounded-lg w-1/2 !pt-16   "
        >
          <div className="pt-8 w-full">
            <TransactionBarChart />
          </div>
        </AddEditSkeleton>
      </div>
    </Container>
  );
}

export default Dashboard;
