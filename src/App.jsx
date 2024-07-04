// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
