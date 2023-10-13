import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";
import AddToyModal from "../AddToyModal/AddToyModal";


const MyToy = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [update, setUpdate] = useState({})

    const { user } = useContext(AuthContext)

    const { data: singleViewDetails = [], isLoading: loading, refetch } = useQuery({

        queryKey: ['singleViewDetails'],
        queryFn: async () => {
            const res = await fetch(`https://education-toys-server-iota.vercel.app/singletoy?sellerEmail=${user?.email}`);
            return res.json()
        }


    })

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                refetch();
                fetch(`https://education-toys-server-iota.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handleUpdate = (id) => {
        refetch()
        fetch(`https://education-toys-server-iota.vercel.app/alltoysdetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
            })
    }

    return (
        <div className="my-28">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleViewDetails.map((toy, index) => <tr key={toy._id}>
                                <td>
                                    {index + 1}


                                </td>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {toy?.name}


                                </td>
                                <td>{toy?.quantity}</td>
                                <td>{toy?.price}</td>
                                <th>
                                    <AddToyModal refetch={refetch} isOpen={isOpen} setIsOpen={setIsOpen} update={update} />
                                    <label onClick={() => handleUpdate(toy._id)} htmlFor="my_modal_6" className="btn"><BiSolidEdit className="text-3xl text-[#3ec5c7]"></BiSolidEdit></label>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(toy._id)} className="btn-ghost">
                                        <AiFillDelete className="text-3xl text-red-600"></AiFillDelete>
                                    </button>

                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;