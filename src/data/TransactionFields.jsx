import CategoryDisplay from "../components/TransactionComponents/TransactionFormDisplay/CategoryDisplay";
import DateAndAmountDisplay from "../components/TransactionComponents/TransactionFormDisplay/DateAndAmountDisplay";
import DescriptionDisplay from "../components/TransactionComponents/TransactionFormDisplay/DescriptionDisplay";

function TransactionFields({ formData, handleChange }) {
  
const inputClass =
    "block mt-2 border border-gray-300 text-gray-600 rounded-md px-3 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400";
  return (
    <>
      <DateAndAmountDisplay
        inputClass={inputClass}
        handleChange={handleChange}
        formData={formData}
      />
      <CategoryDisplay
        inputClass={inputClass}
        handleChange={handleChange}
        formData={formData}
      />
      <DescriptionDisplay
        inputClass={inputClass}
        handleChange={handleChange}
        formData={formData}
      />
    </>
  );
}

export default TransactionFields;