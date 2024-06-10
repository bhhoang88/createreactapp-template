import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                className="flex items-center gap-1 text-current"
                to="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
                title="nextui.org homepage"
            >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
            </Link>
        </footer>
    );
};

export default Footer;
