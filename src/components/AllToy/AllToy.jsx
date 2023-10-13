import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const AllToy = () => {

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [showAll, setShowAll] = useState(false);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        fetch("https://education-toys-server-iota.vercel.app/alltoys")
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleShowAll = () => {
        fetch("https://education-toys-server-iota.vercel.app/showToy")
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setShowAll(true)
            })
    }

    const handleSearch = (search) => {
        fetch(`https://education-toys-server-iota.vercel.app/searchToy/${search}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
        console.log(search);
    };
    const handleSort = (selectedSortOrder) => {
        setSortOrder(selectedSortOrder);
        const sortedToys = [...toys];
        sortedToys.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));

            if (selectedSortOrder === 'asc') {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
        setToys(sortedToys);
    };




    return (
        <div className="my-28 font-roboto px-20">
            <div className="flex w-full justify-between">
                <div className='text-center my-3 flex'>
                    <input
                        onChange={(e) => handleSearch(e.target.value)}
                        type='text'
                        placeholder='Type here'
                        className='input input-bordered input-primary w-full max-w-xs'
                    />
                    <button
                        className='ml-2 px-4 py-3 bg-[#3ec5c7] hover:bg-[#0e6d6e] rounded text-white '>
                        Search
                    </button>
                </div>

                <div >
                    <select
                        name="selectValue"
                        className="bg-[#3ec5c7] p-3 text-white border-0 outline-none rounded"
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option className="py-2" value="asc">Low to high</option>
                        <option className="py-2" value="dsc">Hihg to low</option>
                    </select>
                </div>
            </div>
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
                                                <button className='bg-[#3ec5c7] hover:bg-[#167274] rounded font-roboto text-white px-3 py-2 uppercase'>
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