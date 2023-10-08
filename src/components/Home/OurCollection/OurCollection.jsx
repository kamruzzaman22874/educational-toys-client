import SectionTitle from "../../SectionTitle/SectionTitle"
import collection1 from "../../../assets/image/collection1.webp"
import collection2 from "../../../assets/image/collection2.webp"
import collection3 from "../../../assets/image/ourcollection3.webp"
import collection4 from "../../../assets/image/ourcollection4.webp"
import "./OurCollection.css"


const OurCollection = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Our Collections"
                heading="Who We Are"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 w-full px-16 my-20 ">
                <div className="group relative">

                    <img className="card-bg" src={collection1} alt="" />

                    <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700 transition-all opacity-60 duration-200">

                        <div className="bg-blue-800 hidden group-hover:block duration-500 hover:transition-all  card_title hover:duration-200 group-hover:h-[300px] group-hover:top-[170%] group-hover:left-48 left-0 top-0 group-hover:w-[300px] rounded-full border-4 transition-all">

                            <div className="relative top-[15%] w-full px-16 space-y-2 text-center">
                                <h2 className="text-xl rounded font-semibold bg-white">FINAL SALE!</h2>
                                <h1 className="text-2xl text-white font-bold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img src={collection2} alt="" />
                    <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700 transition-all opacity-30 duration-200">
                        <div className="bg-[#3ec5c7] hidden group-hover:block duration-500 hover:transition-all hover:duration-200 group-hover:h-[300px] group-hover:top-[170%] group-hover:left-48 left-0 top-0 group-hover:w-[300px] rounded-full border-4 transition-all bg-opacity-100">
                            <div className="relative top-[15%] w-full px-16 space-y-2 text-center">
                                <h2 className="text-xl rounded font-semibold bg-white">FINAL SALE!</h2>
                                <h1 className="text-2xl text-white font-bold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img src={collection3} alt="" />
                    <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700 transition-all opacity-30 duration-200">
                        <div className="bg-[#3ec5c7] hidden group-hover:block duration-500 hover:transition-all hover:duration-200 group-hover:h-[300px] group-hover:top-[170%] group-hover:left-48 left-0 top-0 group-hover:w-[300px] rounded-full border-4 transition-all bg-opacity-100">
                            <div className="relative top-[15%] w-full px-16 space-y-2 text-center">
                                <h2 className="text-xl rounded font-semibold bg-white">FINAL SALE!</h2>
                                <h1 className="text-2xl text-white font-bold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img src={collection4} alt="" />
                    <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700 transition-all opacity-30 duration-200">
                        <div className="bg-[#3ec5c7] hidden group-hover:block duration-500 hover:transition-all hover:duration-200 group-hover:h-[300px] group-hover:top-[170%] group-hover:left-48 left-0 top-0 group-hover:w-[300px] rounded-full border-4 transition-all bg-opacity-100">
                            <div className="relative top-[15%] w-full px-16 space-y-2 text-center">
                                <h2 className="text-xl rounded font-semibold bg-white">FINAL SALE!</h2>
                                <h1 className="text-2xl text-white font-bold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="group relative">
                    <img src={collection1} alt="" />
                    <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center    right-0 group-hover:bg-slate-700">
                        <div className='bg-opacity-30 hidden group-hover:block duration-200  hover:transition-all hover:duration-200 group-hover:h-[300px] group-hover:top-[170%] group-hover:left-48 left-0 top-0 group-hover:w-[300px] rounded-full border-4'>
                            <div className='relative top-[15%] w-full px-16 space-y-2 text-center'>
                                <h2 className='text-xl rounded font-semibold bg-white'>FINAL SALE !</h2>
                                <h1 className='text-2xl text-white font-bold'>20% OFFER</h1>
                                <h3 className='text-white'>LATEST KIDS WEAR ON SALE</h3>
                                <button className='bg-white hover:bg-[#3ec5c7] px-4 py-2 rounded'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default OurCollection;