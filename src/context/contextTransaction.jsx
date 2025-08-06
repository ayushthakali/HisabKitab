import { createContext, useCallback, useState } from "react";
import axios from "axios";

const TransactionContext = createContext();
export default TransactionContext;

export function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  const baseUrl = "http://localhost:3005/";

  const fetchTransactions = useCallback(async () => {
    const res = await axios.get(`${baseUrl}transactions`);
    setTransactions(res.data);
  }, []);

  const fetchCategories = useCallback(async () => {
    const res = await axios.get(`${baseUrl}categories`);
    setCategories(res.data);
  }, []);

  const addTransaction = async ({ date, amount, category, description }) => {
    const res = await axios.post(`${baseUrl}transactions`, {
      date,
      amount: Number(amount),
      category,
      description,
    });
    setTransactions((prev) => [...prev, res.data]);
  };

  const addCategory = async ({ categoryName, type }) => {
    const res = await axios.post(`${baseUrl}categories`, {
      name: categoryName,
      type,
    });
    setCategories((prev) => [...prev, res.data]);
  };

  const removeTransaction = async (id) => {
    await axios.delete(`${baseUrl}transactions/${id}`);
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const removeCategory = async (id) => {
    await axios.delete(`${baseUrl}categories/${id}`);
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setTransactions(updatedCategories);
  };

  const editTransaction = async ({
    date,
    amount,
    category,
    description,
    id,
  }) => {
    const res = await axios.put(`${baseUrl}transactions/${id}`, {
      date,
      amount: Number(amount),
      category,
      description,
    });
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, ...res.data };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
  };

  const editCategory = async ({ categoryName, type, id }) => {
    const res = await axios.put(`${baseUrl}categories/${id}`, {
      name: categoryName,
      type,
    });
    const updatedCategory = categories.map((category) => {
      if (category.id === id) {
        return { ...category, ...res.data };
      }
      return category;
    });
    setCategories(updatedCategory);
  };

  const valueToShare = {
    fetchTransactions,
    transactions,
    fetchCategories,
    categories,
    addTransaction,
    removeTransaction,
    editTransaction,
    addCategory,
    removeCategory,
    editCategory,
  };

  return (
    <TransactionContext.Provider value={valueToShare}>
      {children}
    </TransactionContext.Provider>
  );
}
