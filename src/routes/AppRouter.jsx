import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/notFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../pages/AddTouristSpot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
