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

  const valueToShare = { fetchTransactions, transactions, fetchCategories, categories };

  return (
    <TransactionContext.Provider value={valueToShare}>
      {children}
    </TransactionContext.Provider>
  );
}
