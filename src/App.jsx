import React, { useEffect, useState, StrictMode } from "react";
import HomeCardSection from "./components/HomeCardSection";
import Header from "./components/header";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Restaurent from "./pages/Restuarent";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

const AppLayout = () => {
  return (
    <div className="AppContainer">
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeCardSection />,
      },
      {
        path: "/restaurents/:resId",
        element: <Restaurent />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
