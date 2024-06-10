// src/AppRouter.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/default";
import IndexPage from "../pages/home";
import AboutPage from "../pages/about/about";
import BlogPage from "../pages/blog/blog";
import ContactPage from "../pages/contact/contact";
import ProjectPage from "../pages/project/project";

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
                path: "/project",
                element: <ProjectPage />,
            },
            {
                path: "/blog",
                element: <BlogPage />,
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
