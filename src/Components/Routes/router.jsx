import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../NotFount/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
   {
    path: '/register',
    element: <Register />
  },
]);
export default router;
