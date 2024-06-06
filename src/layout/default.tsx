import Footer from "../components/footer";
import { NavbarHeader } from "../components/navbar";
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
