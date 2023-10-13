import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignUp/SignupPage";
import AllToy from "../components/AllToy/AllToy";
import MyToy from "../components/MyToy/MyToy";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import Error from "../pages/Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import SingleViewDetails from "../components/SingleViewDetails/SingleViewDetails";
import AddToyModal from "../components/AddToyModal/AddToyModal";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "signup",
                element: <SignupPage />
            },
            {
                path: "/alltoy",
                element: <AllToy />
            },
            {
                path: "/mytoy",
                element: <PrivateRoutes><MyToy /></PrivateRoutes>
            },
            {
                path: "/mytoy/:id",
                element: <AddToyModal />,
                loader: ({ params }) => fetch(`https://education-toys-server-iota.vercel.app/toys/${params.id}`)

            },
            {
                path: "/addtoy",
                element: <PrivateRoutes><AddToy /></PrivateRoutes>
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/toyDetails/:id",
                element: <PrivateRoutes><SingleViewDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://education-toys-server-iota.vercel.app/alltoysdetails/${params.id}`)
            }
        ]
    },
]);