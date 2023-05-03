import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ChefDetails from "../components/chefDetails/chefDetails";
import Main from "../layouts/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefInfo')
            },
            {
                path: 'chefdetails/:chefdetailsId',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefInfo/${params.chefdetailsId}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;