import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/footer";
import Header from "../pages/header/header";

export default function Root(): JSX.Element {
    return (
        <div className="globalcontainer">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}