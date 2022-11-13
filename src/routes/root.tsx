import { Outlet } from "react-router-dom";
import Header from "../pages/header/header";

export default function Root(): JSX.Element {
    return (
        <div className="globalcontainer">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}