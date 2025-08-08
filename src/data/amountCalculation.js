export function amountCalculation({ transactions, categories }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    const category = categories.find((cat) => cat.id === transaction.catId);

    if (!category) {
      console.warn("No category found for transaction:", transaction);
      return;
    }

    const isExpense = category.type === "Expense";
    const isNetIncome = category.type === "Income" && transaction.category !== "Open Balance";

    if (isNetIncome) {
      income += transaction.amount;
    } else if (isExpense) {
      expense += transaction.amount;
    } else {
      console.log("Open Balance found!!");
    }
  });

  const balanceAmount =
    transactions
      .filter((transaction) => transaction.category === "Open Balance")
      .reduce((acc, bal) => acc + bal.amount, 0) -
    expense +
    income;

  return { income, expense, balanceAmount };
}
