import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useTransactionContext from "../hooks/use-context-transaction";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import AddEditForm from "../components/TransactionComponents/AddEditForm";

function EditTransaction() {
  const { name, type } = useLocation().state;
  const { id } = useParams();
  const navigate = useNavigate();

  const inputClass =
    "block mt-2 border border-gray-300 text-gray-600 rounded-md px-3 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400";

  const [formData, setFormData] = useState({
    categoryName: name,
    type,
    id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { editCategory, categories } = useTransactionContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = categories.some(
      (category) =>
        category.name.toLowerCase() === formData.categoryName.toLowerCase() &&
        category.id !== id
    );
    if (!isDuplicate) {
      editCategory(formData);
      navigate("/category");
    } else {
      alert("Invalid! Category already exists...");
    }
  };

  return (
    <AddEditSkeleton title={"Edit the category..." } className="pt-50">
      <AddEditForm handleSubmit={handleSubmit}>
        <label
          htmlFor="categoryName"
          className="block mb-4 w-full text-gray-700 font-medium"
        >
          NAME:
          <input
            id="categoryName"
            name="categoryName"
            className={inputClass}
            placeholder="Enter name..."
            onChange={handleChange}
            value={formData.categoryName}
            required
          />
        </label>
        <label
          htmlFor="type"
          className="block mb-4 w-full text-gray-700 font-medium"
        >
          CATEGORY
          <select
            id="type"
            name="type"
            className={inputClass}
            onChange={handleChange}
            value={formData.type}
            required
          >
            <option value="" className="text-gray-400">
              Select a type
            </option>
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </label>
      </AddEditForm>
    </AddEditSkeleton>
  );
}

export default EditTransaction;
