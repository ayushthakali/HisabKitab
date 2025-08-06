import { RiDeleteBinLine } from "react-icons/ri";
import useTransactionContext from "../../hooks/use-context-transaction";

function HandleDelete({ transactionId, categoryId }) {
  const { removeTransaction, removeCategory } = useTransactionContext();

  const handleClick = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    if (transactionId) {
      removeTransaction(transactionId);
    } else {
      removeCategory(categoryId);
    }
  };

  return (
    <RiDeleteBinLine className="h-5 w-5 text-red-500 cursor-pointer" onClick={handleClick} />
  );
}

export default HandleDelete;
