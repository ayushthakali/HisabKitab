import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useEffect } from "react";
import { amountCalculation } from "../data/amountCalculation";
import useTransactionContext from "../hooks/use-context-transaction";

function TransactionBarChart() {
  const { fetchTransactions, transactions, fetchCategories, categories } =
    useTransactionContext();

  useEffect(() => {
    fetchTransactions();
    fetchCategories();
  }, [fetchTransactions, fetchCategories]);

  const { income, expense } = amountCalculation({
    transactions,
    categories,
  });

  const data = [
    { name: "Income", amount: income },
    { name: "Expense", amount: expense },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={65}>
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) =>
            value >= 1000 ? `${value / 1000}k` : value
          }
          label={{
            value: "Amount (Rs)",
            angle: -90,
            position: "insideLeft", // Or "outsideLeft", "insideRight"
            style: { textAnchor: "middle" },
          }}
        />
        <Bar dataKey="amount">
          <Cell key="cell-0" fill="#10B981" />
          <Cell key="cell-1" fill="#EF4444" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TransactionBarChart;
