import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Layout />, errorElement: <div>404</div> },
  { path: "/login", element: <Login /> },
]);
export default router;
