import { useForm } from "react-hook-form";
import signup from "../../../public/signup.json"
import Lottie from "lottie-react"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";


const SignupPage = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    // Handle form submission
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser  = result.user;
            console.log(loggedUser);
            userUpdateProfile(data.name, data.photo)
            .then(() =>{
                navigate("/")
            })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    };
    return (
        <div className="font-roboto h-full px-5 my-36">
            <div className="md:flex items-center justify-center py-10 md:px-16">
                <div className="rounded-lg bg-transparent p-2">
                    <Lottie className="md:w-[30rem] rounded" animationData={signup}>
                        
                    </Lottie>
                </div>
                <div className="w-full">
                    <div className="max-w-md mx-auto mt-5 p-6 w-full shadow-2xl bg-white border-[#3ec5c7] bg-transparent rounded">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800 uppercase">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block  font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    {...register("name", { required: true })}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block font-medium">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    {...register("password", { required: true })}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="photoURL" className="block font-medium">Photo URL</label>
                                <input
                                    type="url"
                                    id="photoURL"
                                    name="photoURL"
                                    {...register("photoURL")}
                                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <p className="text-center py-5">ALREADY HAVE AN ACCOUNT PLEASE?  <Link to="/login" className="underline">LOGIN</Link> </p>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-[#3ec5c7] hover:bg-[#0b4647] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue w-full"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignupPage;