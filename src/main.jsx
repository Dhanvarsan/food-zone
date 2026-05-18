import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import './index.css'
import HomePage from './pages/HomePage';

const appRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Contact", element: <ContactUs /> },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
