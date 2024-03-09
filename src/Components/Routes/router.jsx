import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../NotFount/NotFound";
import AllJobs from "../Layouts/JobsSection/AllJobs/AllJobs";
import Story from "../Layouts/Story/Story";


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
        loader: () => fetch(`/json/allJobs.json`)
      },
      {
        path:'/story',
        element:<Story />,
        
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
