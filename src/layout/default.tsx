import Footer from "../components/footer/footer";
import { NavbarHeader } from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <NavbarHeader />
            <Outlet />
            <Footer />
        </>
    );
}
