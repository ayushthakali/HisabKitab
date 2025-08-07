import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Card from "../components/Card";

function DashboardHeader() {
  const headers = [
    { name: "Balance", amount: "50,000", textColor: "text-blue-500" },
    { name: "Income", amount: "20,000", textColor: "text-emerald-500" },
    { name: "Expense", amount: "3,000", textColor: "text-red-500" },
  ];

  const renderedHeaders = headers.map((header) => {
    return (
      <Card className="bg-[#1f232c] flex-row items-center gap-10 max-w-xs !p-0 rounded-xl items-stretch">
        <div className="flex items-center justify-center w-40 bg-[#2a2d3a] rounded-l-xl">
          <TbCurrencyRupeeNepalese
            className={`h-12 w-12 ${header.textColor}`}
          />
        </div>
        <div className="flex flex-col items-start justify-center p-3 w-full  ">
          <p className=" text-gray-300 text-med">{header.name}</p>
          <h1 className="font-semibold text-3xl">Rs.{header.amount}</h1>
        </div>
      </Card>
    );
  });
  return <>{renderedHeaders}</>;
}

export default DashboardHeader;
