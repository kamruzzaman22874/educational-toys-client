import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import "./Categories.css"
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link} from "react-router-dom";
import ToyDetails from "../../AllToy/ToyDetails";

const CategorySection = () => {
    const [tabs, setTabs] = useState([]);
    const sliceData = tabs.slice(0,3)
    const [category, setCategory] = useState("Math Toys")
    const [isOpen, setIsOpen] = useState(false)
    const [filterToy, setFilterToy] = useState({})


    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => {
                setTabs(data.filter(toy => toy.category === category));
            })
    }, [category])


  const handleOpenModal =(id) =>{
    setIsOpen(!isOpen)
    setFilterToy(tabs.find(toy => toy._id === id))
    }
    return (
        <div>
            <SectionTitle
                subHeading="Product Categories"
                heading="What We Sell"
            ></SectionTitle>
            <div className="">
                <div className="category-tabs">
                    <div className="tab-buttons rounded text-lg uppercase">
                        <button

                            className={`tab-button ${category == "Math Toys" ? 'active' : ''}`}
                            onClick={() => setCategory("Math Toys")}
                        >
                            Math Toys
                        </button>
                        <button

                            className={`tab-button ${category == "Language Toys" ? 'active' : ''}`}
                            onClick={() => setCategory("Language Toys")}
                        >
                            Language Toys
                        </button>
                        <button

                            className={`tab-button ${category == "Engineering Toys" ? 'active' : ''}`}
                            onClick={() => setCategory("Engineering Toys")}
                        >
                            Engineering Toys
                        </button>
                    </div>
                    <div  className="grid md:grid-cols-3 w-full">
                        {sliceData?.map((toy, index) => (
                            <div key={index} className="toy-card text-center space-y-3 rounded">
                                <img data-aos="zoom-in" className="h-[300px] rounded" src={toy.image} alt={toy.name} />
                                <h3 className="text-xl font-roboto">{toy.name}</h3>
                                <p className="text-[#3ec5c7] font-bold text-xl">Price:  {toy.price}</p>
                                <p className="text-lg">
                                    <Rating
                                        className="text-yellow-600"
                                        placeholderRating={toy.rating}
                                        readonly
                                        emptySymbol={<FaRegStar/>}
                                        placeholderSymbol={<FaStar/>}
                                        fullSymbol={<FaStar/>}
                                    />
                                </p>
                                <ToyDetails isOpen={isOpen} setIsOpen={setIsOpen} detailsToys={filterToy}/>
                                <Link>
                                    <button onClick={() => handleOpenModal(toy._id)} className="rounded w-full py-3 uppercase text-md bg-[#3ec5c7]">View Details</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;


// to = {`/toyDetails/${toy._id}`}

