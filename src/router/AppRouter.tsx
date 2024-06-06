// src/AppRouter.tsx
import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/default";
import IndexPage from "../pages";
import ContactPage from "../pages/contact";
import AboutPage from "../pages/about";
import BlogPage from "../pages/blog";
import DocsPage from "../pages/pricing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <IndexPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
            {
                path: "/docs",
                element: <DocsPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
        ],
    },
]);

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
