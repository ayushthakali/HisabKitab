import Container from "../components/Container";
import Card from "../components/Card";
import { RiDeleteBinLine } from "react-icons/ri";
import useTransactionContext from "../hooks/use-context-transaction";

function Settings() {
  const { removeAllTransactions } = useTransactionContext();

  const handleClick = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;
    removeAllTransactions();
  };

  return (
    <Container className="!flex-col !px-22 gap-12">
      <Card className="bg-[#1f232c] flex-row items-center gap-10 !max-w-100 !p-0 rounded-xl items-stretch">
        <div className="flex items-center justify-center w-16 bg-[#2a2d3a] rounded-l-xl">
          <RiDeleteBinLine
            className=" text-red-500 h-6 w-6 cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <h1 className=" text-xl p-3">Delete all transactions...</h1>
      </Card>
    </Container>
  );
}

export default Settings;
