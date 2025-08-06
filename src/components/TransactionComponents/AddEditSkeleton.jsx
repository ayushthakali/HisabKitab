import Container from "../Container";
import Card from "../Card";
import { Link } from "react-router";

function AddEditSkeleton({ children, title, className, link }) {
  return (
    <Container className={className}>
      <Card className="items-start gap-3 p-8 bg-white shadow-lg rounded-lg mb-9 -mt-12">
        <div className="flex justify-between w-full p-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-indigo-800 ">{title}</h1>
          {link && (
            <Link
              to="/category/add" 
              className="border px-4 py-2 rounded bg-indigo-500 text-white cursor-pointer shadow transition-colors hover:bg-indigo-700 mt-1"
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
