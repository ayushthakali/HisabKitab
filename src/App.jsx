import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/Root";
import Category from "./pages/Category";
import Transaction from "./pages/Transaction";
import Settings from "./pages/Settings";
import AddTransaction from "./pages/AddTransaction";

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
        {
          index: true,
          element: <Dashboard />
        },{
          path:"category",
          element: <Category />
        },{
          path:"transaction",
          element: <Transaction />
        },{
          path:"settings",
          element: <Settings />
        },{
          path:"transaction/add",
          element:<AddTransaction/>
        }
    ]
  },
 ])
  return <RouterProvider router={router} />;
}

export default App