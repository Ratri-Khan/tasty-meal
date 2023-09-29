import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Home from "../../Component/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

        ],
    },
]);

export default router;