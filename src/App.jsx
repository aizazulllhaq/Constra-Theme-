// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import Test from "./Test";
import OurLeadersPage from "./Pages/OurLeadersPage";
import TestonomialsPage from "./Pages/TestonomialsPage";
import FAQ from "./Pages/FAQ";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUsPage />,
    },
    {
      path: "/team",
      element: <OurLeadersPage />,
    },
    {
      path:"/testomonials",
      element:<TestonomialsPage/>
    },
    {
      path:"/faqs",
      element:<FAQ/>
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
