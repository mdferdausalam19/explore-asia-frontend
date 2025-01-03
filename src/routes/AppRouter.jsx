import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../features/auth/SignIn"
import SignUp from "../features/auth/SignUp";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../features/touristSpots/AddTouristSpot";
import TouristSpotDetails from "../features/touristSpots/TouristSpotDetails";
import MyList from "../features/touristSpots/MyList";
import UpdateTouristSpot from "../features/touristSpots/UpdateTouristSpot";
import AllTouristSpot from "../features/touristSpots/AllTouristSpot";

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
      {
        path: "/tourist-spots/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails></TouristSpotDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tourist-spot/:id",
        element: (
          <PrivateRoute>
            <UpdateTouristSpot></UpdateTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tourist-spots",
        element: (
          <PrivateRoute>
            <AllTouristSpot></AllTouristSpot>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
