import Lottie from "lottie-react"
import error from "../../../public/error.json"
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="my-10 md:w-[30rem] mx-auto">
            <Lottie animationData={error}>

            </Lottie>
            <div className="flex justify-center my-10 ">
                <Link to="/">
                    <button className="text-center px-10 py-3 rounded uppercase">Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;