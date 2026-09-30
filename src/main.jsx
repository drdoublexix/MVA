import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";

const loadComponent = (loadPage) => async () => {
  const { default: Component } = await loadPage();
  return { Component };
};

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutUs", lazy: loadComponent(() => import("./aboutUs.jsx")) },
  { path: "/awards", lazy: loadComponent(() => import("./awards.jsx")) },
  { path: "/riseToFame", lazy: loadComponent(() => import("./mvaRise.jsx")) },
  { path: "/nominate", lazy: loadComponent(() => import("./nominate.jsx")) },
  { path: "/nominate/submit", lazy: loadComponent(() => import("./publicNomination.jsx")) },
  { path: "/sponsors", lazy: loadComponent(() => import("./sponsors.jsx")) },
  { path: "/gallery", lazy: loadComponent(() => import("./gallery.jsx")) },
  { path: "/contact", lazy: loadComponent(() => import("./contact.jsx")) },
  { path: "/register", lazy: loadComponent(() => import("./register.jsx")) },
  { path: "/mva-rise/register", lazy: loadComponent(() => import("./mvaRiseRegister.jsx")) },
  { path: "/mva-rise", lazy: loadComponent(() => import("./mvaRise.jsx")) },
  { path: "/privacyPolicy", lazy: loadComponent(() => import("./privacyPolicy.jsx")) },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
