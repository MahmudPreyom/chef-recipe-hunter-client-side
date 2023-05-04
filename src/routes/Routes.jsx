import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ChefDetails from "../components/chefDetails/chefDetails";
import Error from "../components/error/Error";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefInfo/${params.chefdetailsId}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
]);

export default router;