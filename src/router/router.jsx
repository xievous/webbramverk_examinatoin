import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCard from "../pages/AddCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addcard",
    element: <AddCard />,
  },
]);

export default router;
