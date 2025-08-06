import HandleDelete from "./HandleDelete";
import HandleEdit from "./HandleEdit";

function CategoryTable({ categories }) {
  const headerElement = ["Category", "Type", "Actions"];

  const header = headerElement.map((title) => {
    return (
      <th className="px-4 py-2 border-r border-indigo-300" key={title}>
        {title}
      </th>
    );
  });

  const renderedCategories = categories.map((category) => {
    return (
      <tr key={category.id} >
        <td className="px-4 py-2 border-r border-indigo-300">
          {category.name}
        </td>
        <td className="px-4 py-2 border-r border-indigo-300 ">
         <h1 className={`inline-block w-1/2 text-white rounded-md ${category.type==="Expense"?"bg-red-500":"bg-green-500"}`}>{category.type}</h1>
        </td>
        <td className="px-4 py-2 flex justify-center items-center gap-1 mt-1 ">
          <HandleEdit category={category} />
          <HandleDelete categoryId={category.id} />
        </td>
      </tr>
    );
  });

  return (
    <table className="table-auto border border-indigo-300 border-collapse w-full text-center -mt-2">
      <thead className="border-b border-indigo-300 bg-indigo-200">
        <tr>{header}</tr>
      </thead>
      <tbody>{renderedCategories}</tbody>
    </table>
  );
}

export default CategoryTable;
