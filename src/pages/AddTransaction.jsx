import Container from "../components/Container";
import Card from "../components/Card";
import CategoryDisplay from "../components/TransactionComponents/CategoryDisplay";

function AddTransaction() {
  const formElements = [
    { name: "Date", type: "date" },
    { name: "Amount", type: "number" },
  ];

  const inputClass =
    "block mt-2 border border-gray-300 text-gray-600 rounded-md px-3 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400";

  const renderedForm = formElements.map((el) => {
    return (
      <label
        key={el.name}
        htmlFor={el.name}
        className="block mb-4 w-full text-gray-700 font-medium"
      >
        {el.name}
        <input
          type={el.type}
          id={el.name}
          name={el.name}
          className={inputClass}
          placeholder={`Enter ${el.name.toLowerCase()}`}
        />
      </label>
    );
  });

  return (
    <Container>
      <Card className="items-start gap-3 p-8 bg-white shadow-lg rounded-lg">
        <div className="w-full p-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold text-indigo-800 ">
            Create a new transaction...
          </h1>
        </div>
        <div className="w-full h-full px-2 py-2">
          <form className="w-full space-y-6">
            {renderedForm}
            <CategoryDisplay inputClass={inputClass} />
            <button className="w-full py-2 rounded-md bg-indigo-500 text-white font-semibold shadow transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mt-2 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default AddTransaction;
