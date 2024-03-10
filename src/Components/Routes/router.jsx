import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../NotFount/NotFound";
import AllJobs from "../Layouts/JobsSection/AllJobs/AllJobs";
import Story from "../Layouts/Story/Story";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


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
      {
        path:'/alljobs',
        element:<AllJobs />,
      },
      {
        path:'/story',
        element:<Story />,
        
      },
      {
        path:"/details/:category",
        element:<PrivateRoute>
          <Details />
          </PrivateRoute>,
          loader:()=>fetch(`/allJobs.json`)
      }
      
      
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
