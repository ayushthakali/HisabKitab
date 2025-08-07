export function amountCalculation({ transactions, categories }) {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    const isExpense =
      categories.find((category) => category.id === transaction.catId).type ===
      "Expense";
    const isNetIncome =
      categories.find((category) => category.id === transaction.catId).type ===
        "Income" && transaction.category !== "Open Balance";

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
