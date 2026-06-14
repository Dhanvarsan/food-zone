import React, {
  useEffect,
  useState,
  StrictMode,
  lazy,
  Suspense,
  useContext,
} from "react";
import HomeCardSection from "./components/HomeCardSection";
import Header from "./components/header";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
// import Restaurent from "./pages/Restuarent";
import ErrorPage from "./components/ErrorPage";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./stores/appStore";
import "./index.css";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Dhanvarsan");
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ user: userName, setUserName }}>
        <div className="AppContainer">
          <div className="Container">
            <Header />
          </div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      </userContext.Provider>
    </Provider>
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
