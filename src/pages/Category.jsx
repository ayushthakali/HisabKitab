import AddEditSkeleton from "../components/TransactionComponents/AddEditSkeleton";
import { useEffect } from "react";
import useTransactionContext from "../hooks/use-context-transaction";
import CategoryTable from "../components/TransactionComponents/CategoryTable";

function Category() {
  const { fetchCategories, categories } = useTransactionContext();
  
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <AddEditSkeleton
      title="Categories..."
      className="pt-48"
      link="+Add Category"
    >
      <div className="mt-4 p-3 w-full overflow-x-auto">
        <CategoryTable categories={categories}/>
      </div>
    </AddEditSkeleton>
  );
}

export default Category;
