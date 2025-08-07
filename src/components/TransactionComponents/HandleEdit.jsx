import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";

function HandleEdit({ transaction, category }) {
  const isTransaction = Boolean(transaction);
  const data = isTransaction ? transaction : category;
  const path = isTransaction ? `/transaction/${data.id}` : `/category/${data.id}`;

  return (
    <Link to={path} state={data}>
      <GrEdit
        className="h-5 w-5 text-white cursor-pointer"
      />
    </Link>
  );
}

export default HandleEdit;
