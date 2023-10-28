import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import HandleError from "./components/handleErrors";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Post from "./components/Post"
// import {Provider} from "react-redux";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <HandleError/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "posts/:id",
                element: <Post/>,
            },
            {
                path: "profile",
                element: <Profile/>,
            }

        ]
    }

])
root.render(
    <RouterProvider router = {router} />
);