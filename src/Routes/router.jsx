import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import AddCoffe from "../Layouts/AddCoffe";
import Update from "../Layouts/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-coffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "update-info",
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
