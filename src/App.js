import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestroMenu from "./components/RestroMenu";

// React elements are objects -> when it renders into DOM then it becomes an html element
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello React"
// );
const AboutUs = lazy(() => import('./components/AboutUs'));
// Food ordering App

const AppLayout = () => {

  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback='Loading About us page'><AboutUs /></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
