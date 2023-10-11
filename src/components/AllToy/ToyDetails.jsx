import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Modal from "../Modal/Modal";

const ToyDetails = ({ isOpen, setIsOpen, detailsToys }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <div className="">
                <section className="py-10 bg-white sm:py-16 lg:py-10">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                            <div>
                                <img className="w-full max-w-md mx-auto rounded h-[300px]" src={detailsToys?.image} alt="" />
                            </div>

                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl">{detailsToys?.name}</h2>
                                <p className="mt-6 text-base text-gray-600">{detailsToys?.description}</p>
                                
                                    <p className="mt-1 text-base text-gray-600"><span className="text-lg font-roboto">Seller Name:</span> {detailsToys?.sellerName}</p>
                                    <p className="mt-1 text-base text-gray-600"><span className="text-lg font-roboto">Seller Email:</span> {detailsToys?.sellerEmail}</p>
                                
                                    <p className="mt-1 text-base text-gray-600"><span className="text-lg font-roboto">Price:</span> {detailsToys?.price}</p>
                                    <p className="mt-1 text-base text-gray-600">Quantity: {detailsToys?.quantity}</p>
                                
                                <p className="mt-6 text-base text-gray-600">
                                    <div className="flex justify-center">
                                        <Rating
                                            className="text-yellow-600"
                                            placeholderRating={detailsToys?.rating}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        />
                                    </div>
                                </p>


                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Modal>


    );
};

export default ToyDetails;