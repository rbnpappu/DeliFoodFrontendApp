import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "./Root";
import Register from "../Components/Register";
import Login from "../Components/Login";

function HomePage() {
    const routeDefinations = createRoutesFromElements(
        <Route>
            <Route path="/" element={<RootLayout/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Route>
    ) 

    const router = createBrowserRouter(routeDefinations)


    return (
        <RouterProvider router={router} />
    );
}

export default HomePage;
