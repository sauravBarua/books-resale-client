import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Home from "../layout/home/Home";
import Main from "../layout/main/Main";
import Blog from "../pages/blog/Blog";
import Buyer from "../pages/buyer/Buyer";
import Category from "../pages/category/Category";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Category",
        element: <Category></Category>,
      },
      {
        path: "/categorypage",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Buyer></Buyer>,
      },
    ],
  },
]);
