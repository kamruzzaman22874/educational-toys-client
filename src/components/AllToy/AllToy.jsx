import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToy = () => {
   
    const [toys, setToys] = useState([])
    const [showAll, setShowAll] = useState(false);
    // const [search, setSearch] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleShowAll = () => {
        fetch("http://localhost:5000/showToy")
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setShowAll(true)
            })
    }

    // const handleSearch = () => {
    //     fetch(`http://localhost:5000/searchToy/${search}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setToys(data);
    //         });
    // };


    return (
        <div className="my-28 font-roboto px-20">
            {/* <div className='text-center my-3'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type='text'
                    placeholder='Type here'
                    className='input input-bordered input-primary w-full max-w-xs'
                />
                <button
                    onClick={handleSearch}
                    className='ml-2 px-4 py-3 bg-pink-600 hover:bg-pink-800 rounded text-white '>
                    Search
                </button>
            </div> */}
            <div className='w-full my-5'>
                <div className='overflow-x-auto w-full'>
                    <table className='table w-full'>
                        {/* head */}
                        <thead className="text-lg text-center">
                            <tr>
                                <th>SL.</th>
                                <th>Seller</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {toys?.map((toy, idx) => (
                                <>
                                    <tr key={idx}>
                                        <td>
                                            <div className='flex items-center space-x-2'>
                                                <div className='avatar'>
                                                    <div className='w-12 h-12'>
                                                        {idx + 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{toy?.sellerName}</td>
                                        <td>
                                            <div>
                                                <div className='font-bold'>{toy?.name}</div>
                                            </div>
                                            <br />
                                        </td>
                                        <td>{toy?.category}</td>
                                        <td>{toy?.price}</td>
                                        <td>{toy?.quantity}</td>
                                        <th>
                                            <Link to={`/toyDetails/${toy._id}`}>
                                                <button className='bg-pink-600 hover:bg-pink-800 rounded font-roboto text-white px-3 py-2 uppercase'>
                                                    view details
                                                </button>
                                            </Link>
                                        </th>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                    {!showAll && (
                        <div className='flex justify-center '>
                            <button
                                onClick={handleShowAll}
                                className='bg-pink-600 py-3 px-4 rounded text-white font-roboto'>
                                Show All
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllToy;