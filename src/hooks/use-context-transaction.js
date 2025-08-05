import TransactionContext from "../context/contextTransaction";
import { useContext } from "react";

export default function useTransactionContext() {
  return useContext(TransactionContext);
}
