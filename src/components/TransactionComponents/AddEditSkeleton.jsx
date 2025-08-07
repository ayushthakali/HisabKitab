import Container from "../Container";
import Card from "../Card";
import { Link } from "react-router";

function AddEditSkeleton({ children, title, className, link }) {
  return (
    <Container className={className}>
      <Card className="items-start gap-3 p-8 rounded-lg -mt-19 ">
        <div className="flex justify-between w-full p-3 border-b border-gray-300 ">
          <h1 className="text-3xl font-bold text-white ">{title}</h1>
          {link && (
            <Link
              to="/category/add" 
              className="px-4 py-2 rounded-md bg-indigo-500 text-white cursor-pointer shadow transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-1"
            >
              {link}
            </Link>
          )}
        </div>
        {children}
      </Card>
    </Container>
  );
}

export default AddEditSkeleton;
