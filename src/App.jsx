import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./pages/sideBarPage/Dashboard";
import Root from "./pages/Root";
import Category from "./pages/sideBarPage/Category";
import Transaction from "./pages/sideBarPage/Transaction";
import Settings from "./pages/sideBarPage/Settings";

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
        }
    ]
  },
 ])
  return <RouterProvider router={router} />;
}

export default App