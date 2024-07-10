// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import Test from "./Test";
import OurLeadersPage from "./Pages/OurLeadersPage";
import TestonomialsPage from "./Pages/TestonomialsPage";
import FAQ from "./Pages/FAQ";
import PricingPage from "./Pages/PricingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SingleProject from "./Pages/SingleProject";
import ServicesPage from "./Pages/ServicesPage";
import SingleService from "./Pages/SingleService";
import Typography from "./Pages/Typography";
import NotFound from "./Pages/NotFound";

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
      path: "/testomonials",
      element: <TestonomialsPage />,
    },
    {
      path: "/faqs",
      element: <FAQ />,
    },
    {
      path: "/pricing",
      element: <PricingPage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/project",
      element: <SingleProject />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/service",
      element: <SingleService />,
    },
    {
      path: "/typography",
      element: <Typography />,
    },
    {
      path: "/pageNotFound",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
