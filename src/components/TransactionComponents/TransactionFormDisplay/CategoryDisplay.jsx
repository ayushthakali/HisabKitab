import { useEffect } from "react";
import useTransactionContext from "../../../hooks/use-context-transaction";

function CategoryDisplay({ inputClass, handleChange, formData}) {
  const { categories, fetchCategories } = useTransactionContext();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const renderedOptions = categories.map((option) => {
    return (
      <option key={option.name} value={option.name}>
        {option.type === "Expense" ? "\u{1F534}" : "\u{1F7E2}"} {option.name}
      </option>
    );
  });

  return (
    <label
      htmlFor="Category"
      className="block mb-4 w-full text-gray-400 font-medium"
    >
      CATEGORY
      <select id="Category" name="category" className={`${inputClass} overflow-y-auto`} onChange={handleChange} value={formData.category} required>
        <option value="" className="text-gray-400">
          Select a category
        </option>
        {renderedOptions}
      </select>
    </label>
  );
}

export default CategoryDisplay;
