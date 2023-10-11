import Lottie from "lottie-react"
import loader from "../../../public/loading.json"

const Loader = () => {
    return (
        <div className="my-20 pt-10">
            <Lottie className="my-10 md:w-[15rem] mx-auto" animationData={loader}>

            </Lottie>
        </div>
    );
};

export default Loader;