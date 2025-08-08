import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/Root";
import Category from "./pages/Category";
import TransactionPage from "./pages/TransactionPage";
import AddTransaction from "./pages/AddTransaction";
import EditTransaction from "./pages/EditTransaction";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "transaction",
          element: <TransactionPage />,
        },
        {
          path: "transaction/add",
          element: <AddTransaction />,
        },
        {
          path: "transaction/:id",
          element: <EditTransaction />,
        },
        {
          path: "category/add",
          element: <AddCategory/>,
        },
        {
          path: "category/:id",
          element: <EditCategory />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
