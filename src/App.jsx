import React, { useEffect, useState, StrictMode, lazy, Suspense } from "react";
import HomeCardSection from "./components/HomeCardSection";
import Header from "./components/header";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
// import Restaurent from "./pages/Restuarent";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

const AppLayout = () => {
  return (
    <div className="AppContainer">
      <div className="Container">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};
const Restaurent = lazy(() => import("./pages/Restuarent"));
const appRouter = createHashRouter([
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Restaurent />
          </Suspense>
        ),
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
