import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import AddEditForm from "../components/TransactionComponents/AddEditForm";
import useTransactionContext from "../hooks/use-context-transaction";
import TransactionFields from "../data/TransactionFields";

function AddTransaction() {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { addTransaction } = useTransactionContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
    navigate("/transaction");
  };

  return (
    <AddEditSkeleton title={"Create a new transaction..."}>
      <AddEditForm handleSubmit={handleSubmit}>
        <TransactionFields handleChange={handleChange} formData={formData} />
      </AddEditForm>
    </AddEditSkeleton>
  );
}

export default AddTransaction;
