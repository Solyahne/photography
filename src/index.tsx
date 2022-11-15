import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./normalize.css";
import "./style.css";
import Root from "./routes/root";
import Home from "./pages/home/home";
import Errorpage from "./pages/errorpage/errorpage";
import Mentions from "./pages/mentionslegales/mentionslegales";
import Photographies from "./pages/photographies/photographies";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/mentionslegales",
                element: <Mentions />
            },
            {
                path: "/photographies",
                element: <Photographies />
            }
        ]

    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();