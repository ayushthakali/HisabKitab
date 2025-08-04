import { createContext, useCallback, useState } from "react";
import axios from "axios";

const TransactionContext = createContext();
export default TransactionContext;

export function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const baseUrl = "http://localhost:3005/transactions";

  const fetchTransactions = useCallback(async () => {
    const res = await axios.get(baseUrl);
    setTransactions(res.data);
  }, []);

  return (
    <TransactionContext.Provider value={{ fetchTransactions, transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

