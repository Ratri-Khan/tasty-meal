import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Home from "../../Component/Home/Home";
import RecipeDetails from "../../Component/RecipeDetails/RecipeDetails";
import PrivateRoutes from "../PrivateRoutes";

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
            {
                path: "/recipeDetails/:id",
                element: <PrivateRoutes><RecipeDetails></RecipeDetails>,</PrivateRoutes>,
                loader:({params}) =>fetch(`https://tasty-meal-server.vercel.app/chefInfo/${params.id}`)
            },

        ],
    },
]);

export default router;