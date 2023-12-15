import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Year from "@/pages/Year";
import Month from "@/pages/Month";
import New from "@/pages/New";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Month />,
      },
      {
        path: "/month",
        element: <Month />,
      },
      {
        path: "/year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;
