import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AddToyModal from "../AddToyModal/AddToyModal";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const SingleViewDetails = () => {
    const details = useLoaderData()
    const { image, name, price, quantity, description, sellerName, sellerEmail, _id } = details;
    console.log(details);
    const [isOpen, setIsOpen] = useState(false)

    const {isLoading} = useQuery({
        
    })

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Deleted successfully done",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="my-20 px-20">
            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 rounded-lg">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src={image} alt="" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center  md:text-left">
                        <h2 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{name}</h2>
                        <p className="mt-4 text-base text-gray-200 text-center">{description}</p>
                        <p className="mt-2 text-base text-gray-200">Quantity: {quantity}</p>
                        <p className="mt-2 text-base text-gray-200">Price: {price}</p>
                        <p className="mt-2 text-base text-gray-200">{sellerName}</p>
                        <p className="mt-2 text-base text-gray-200">{sellerEmail}</p>
                    </div>
                    <div className="flex gap-6 mt-8 justify-center">
                        <AddToyModal isOpen={isOpen} setIsOpen={setIsOpen} details={details} />
                        <button onClick={() => setIsOpen(!isOpen)} className="px-8 py-3 rounded bg-[#3ec5c7] hover:bg-[#0e7274]">Update</button>
                        <button onClick={() => handleDelete(_id)} className="px-8 py-3 bg-[#3ec5c7] hover:bg-[#0e7274] rounded">Delete</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SingleViewDetails;