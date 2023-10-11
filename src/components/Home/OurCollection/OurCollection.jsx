import SectionTitle from "../../SectionTitle/SectionTitle"
import collection1 from "../../../assets/image/collection1.webp"
import collection2 from "../../../assets/image/collection2.webp"
import collection3 from "../../../assets/image/ourcollection3.webp"
import collection4 from "../../../assets/image/ourcollection4.webp"
import Aos from "aos"
import "aos/dist/aos.css"
import "./OurCollection.css"
import { useEffect } from "react"

const OurCollection = () => {
    useEffect(() =>{
        Aos.init()
    },[])
    return (
        <div>
            <SectionTitle
                subHeading="Our Collections"
                heading="Who We Are"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 w-full px-16 my-20 ">
                <div data-aos="flip-left" className="group relative card-bg">
                    <img  src={collection1} alt="" />
                    <div
                        className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700/50 transition-all duration-200"
                    >
                        <div
                            className="card_title bg-[#3ec5c7] p-10 border-4 border-white rounded-full w-[320px] h-[320px]"
                        >
                            <div className="top-[15%] w-full px-1 py-8 space-y-4 text-center">
                                <h2 className="text-xl w-3/4 mx-auto rounded font-semibold text-white">FINAL SALE!</h2>
                                <h1 className="text-3xl text-[#3d3d3d] font-extrabold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-[#3d3d3d]  text-white hover:bg-white hover:text-black font-roboto px-6 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="group relative card-bg">
                    <img  src={collection2} alt="" />
                    <div
                        className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700/50 transition-all duration-200"
                    >
                        <div
                            className="card_title bg-[#29adaf] p-10 border-4 border-white rounded-full w-[320px] h-[320px]"
                        >
                            <div className="top-[15%] w-full px-1 py-8 space-y-4 text-center">
                                <h2 className="text-xl w-3/4 mx-auto rounded font-semibold text-white">FINAL SALE!</h2>
                                <h1 className="text-3xl text-[#3d3d3d] font-extrabold">40% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-[#3d3d3d]  text-white hover:bg-white hover:text-black font-roboto px-6 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="group relative card-bg">
                    <img src={collection3} alt="" />
                    <div
                        className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700/50 transition-all duration-200"
                    >
                        <div
                            className="card_title bg-[#b98537] p-10 border-4 border-white rounded-full w-[320px] h-[320px]"
                        >
                            <div className="top-[15%] w-full px-1 py-8 space-y-4 text-center">
                                <h2 className="text-xl w-3/4 mx-auto rounded font-semibold text-white">FINAL SALE!</h2>
                                <h1 className="text-3xl text-[#3d3d3d] font-extrabold">10% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-[#3d3d3d]  text-white hover:bg-white hover:text-black font-roboto px-6 py-2 rounded">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className="group relative card-bg">
                    <img src={collection4} alt="" />
                    <div
                        className="absolute w-full h-full left-0 top-0 flex justify-center items-center right-0 group-hover:bg-slate-700/50 transition-all duration-200"
                    >
                        <div
                            className="card_title bg-[#aa7525] p-10 border-4 border-white rounded-full w-[320px] h-[320px]"
                        >
                            <div className="top-[15%] w-full px-1 py-8 space-y-4 text-center">
                                <h2 className="text-xl w-3/4 mx-auto rounded font-semibold text-white">FINAL SALE!</h2>
                                <h1 className="text-3xl text-[#3d3d3d] font-extrabold">20% OFFER</h1>
                                <h3 className="text-white">LATEST KIDS WEAR ON SALE</h3>
                                <button className="bg-[#3d3d3d]  text-white hover:bg-white hover:text-black font-roboto px-6 py-2 rounded">Shop Now</button>
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