import { createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignUp/SignupPage";

export const router = createBrowserRouter([
    {
        path: "/",
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
            }
        ]
    },
]);