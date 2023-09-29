import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import Home from "../../Component/Home/Home";
import RecipeDetails from "../../Component/RecipeDetails/RecipeDetails";

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
                element: <RecipeDetails></RecipeDetails>,
                loader:({params}) =>fetch(`http://localhost:3000/chefInfo/${params.id}`)
            },

        ],
    },
]);

export default router;