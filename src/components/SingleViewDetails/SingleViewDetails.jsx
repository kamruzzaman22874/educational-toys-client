import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleViewDetails = () => {
    const details = useLoaderData()
    const { image, name, price, rating, quantity, description, sellerName, sellerEmail } = details;

    return (

        <div className="my-28">
            <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <img src={image} alt="Product Image" className="w-full h-[350px] object-cover rounded-md" />
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Product Name : {name}</div>
                <div className="text-sm text-gray-600 mb-4">Quantity: {quantity}</div>
                <div className="text-xl font-bold text-indigo-600 mb-4">{price}</div>
                <div className="text-sm text-gray-600 mb-2">Seller Name: {sellerName}</div>
                <div className="text-sm text-gray-600 mb-4">Seller Email: {sellerEmail}</div>
                <div className="text-sm text-gray-600 mb-4">
                    <Rating
                        className="text-yellow-600 text-lg"
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                </div>
                <div className="text-gray-700">Description: {description}</div>

            </div>
        </div>
    );
};

export default SingleViewDetails;