import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Books from "../books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Navbar from "../shared/navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
