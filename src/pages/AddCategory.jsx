import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import AddEditForm from "../components/TransactionComponents/AddEditForm";
import useTransactionContext from "../hooks/use-context-transaction";

function AddCategory() {
  const [formData, setFormData] = useState({
    categoryName: "",
    type: "",
  });

  const inputClass =
    "block mt-2 border border-gray-600 text-gray-50 bg-gray-800 rounded-md px-3 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { addCategory, categories } = useTransactionContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sure = categories.filter(
      (category) =>
        category.name.toLowerCase() === formData.categoryName.toLowerCase()
    );

    if (sure.length === 0) {
      addCategory(formData);
      navigate("/category");
    } else {
      alert("Invalid! Category already exists...");
    }
  };

  return (
    <AddEditSkeleton title={"Create a new category..."} className="pt-48">
      <AddEditForm handleSubmit={handleSubmit}>
        <label
          htmlFor="categoryName"
          className="block mb-4 w-full text-gray-400 font-medium"
        >
          NAME
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
          className="block mb-4 w-full text-gray-400 font-medium"
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

export default AddCategory;
