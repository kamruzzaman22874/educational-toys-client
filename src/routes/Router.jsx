import { createBrowserRouter} from "react-router-dom";
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
import CategorySection from "../components/Home/CategorySection/CategorySection";
import SingleViewDetails from "../components/SingleViewDetails/SingleViewDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error/>,
        element: <MainLayouts/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "signup",
                element: <SignupPage/>
            },
            {
                path: "/alltoy",
                element: <AllToy/>
            },
            {
                path: "/mytoy",
                element: <MyToy/>
            },
            {
                path: "/addtoy",
                element: <PrivateRoutes><AddToy /></PrivateRoutes>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path:"/toyDetails/:id",
                element: <SingleViewDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltoysdetails/${params.id}`)
            }
        ]
    },
]);