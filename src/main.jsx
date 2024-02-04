import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/nav/Navbar.jsx";
import Footer from "./components/nav/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App key={document.location.href} />,
  },
  {
    path: "projects/:slug",
    element: <Projects key={document.location.href} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="">
      <div className="max-w-4xl mx-auto">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <div className="pt-16 pb-8 max-w-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </main>
  </React.StrictMode>
);
