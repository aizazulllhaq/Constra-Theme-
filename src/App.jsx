// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
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
import NewsSideBar from "./Pages/NewsPages/NewsSideBar";
import SingleNews from "./Pages/NewsPages/SingleNews";
import ContactPage from "./Pages/ContactPage";

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
      path: "/newsLeftSideBar",
      element: <NewsSideBar side="left" />,
    },
    {
      path: "/newsRightSideBar",
      element: <NewsSideBar side="right" />,
    },
    {
      path: "/singleNews",
      element: <SingleNews />,
    },
    {
      path:"/contact",
      element:<ContactPage/>
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
