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
import Blogs from "../Pages/Blogs/Blogs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdatedJob from "../Pages/MyJobs/UpdateJob/UpdatedJob";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/alljobs',
        element: <AllJobs />,
      },
      {
        path: '/story',
        element: <Story />,

      },
      {
        path: '/blogs',
        element: <Blogs />,

      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
          <Details />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
      },
      {
        path: 'appliedJobs',
        element: <PrivateRoute>
          <AppliedJobs />
        </PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute>
          <AddAJob />
        </PrivateRoute>
      },
      {
        path: 'myjobs',
        element: <PrivateRoute>
          <MyJobs />
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/api/v1/jobs')
      },
      {
        path: '/updateJob/:id',
        element: <PrivateRoute>
          <UpdatedJob />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
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
