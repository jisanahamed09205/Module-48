import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleCard from "../Pages/SingleCard/SingleCard";

const createMyRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donations/:id',
                element: <SingleCard></SingleCard>,
                loader: () => fetch('/donation.json')
            }
        ]
    }
])

export default createMyRoute;