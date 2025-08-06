import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useTransactionContext from "../hooks/use-context-transaction";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import AddEditForm from "../components/TransactionComponents/AddEditForm";
import TransactionFields from "../data/TransactionFields";

function EditTransaction() {
  const { date, amount, category, description } = useLocation().state;
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date,
    amount,
    category,
    description,
    id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { editTransaction } = useTransactionContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTransaction(formData);
    navigate("/transaction");
  };

  return (
    <AddEditSkeleton title={"Edit the transaction..."}>
      <AddEditForm handleSubmit={handleSubmit}>
        <TransactionFields handleChange={handleChange} formData={formData} />
      </AddEditForm>
    </AddEditSkeleton>
  );
}

export default EditTransaction;
