import { useContext,useEffect,useState} from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const AddToyModal = ({ update,refetch }) => {
    console.log(update);
    const {user} = useContext(AuthContext)
    const [allToy, setAllToy] = useState([])


        // useEffect(() =>{
        //     fetch(`http://localhost:5000/alltoysdetails/${}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        // }, [])

    const handleUpdateItem = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(name, price, quantity);

        const updateItem = {
            price,
            quantity,
            description,
        }

        fetch(`http://localhost:5000/toys/${update?._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Good job!',
                        'Udpade successfully done',
                        'success'
                    )
                }
            })
    }


    return (

        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="bg-white rounded">
                        <form onSubmit={handleUpdateItem} className=''>
                            <div className='flex w-full gap-x-6'>
                                <div className=" w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold">Toy Name*</span>

                                    </label>
                                    <input type="text" name='name' readOnly defaultValue={update.name} placeholder="toy name" className="input input-bordered w-full " />

                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Seller Name*</span>

                                    </label>
                                    <input type="text" name='sellerName' defaultValue={update.sellerName} readOnly placeholder="seller name" className="input input-bordered w-full " />

                                </div>
                            </div>
                            <div className=' flex gap-x-6 w-full'>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Seller Email*</span>

                                    </label>
                                    <input type="text" name='sellerEmail' readOnly defaultValue={update.sellerEmail} value={user.email} placeholder="seller name" className="input input-bordered w-full " />

                                </div>
                                <div className=" w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Available quantity*</span>

                                    </label>
                                    <input type="number" name='quantity' defaultValue={update.quantity} placeholder="available quantity" className="input input-bordered w-full " />

                                </div>
                            </div>
                            <div className="w-full  gap-x-6">
                                <div className=''>
                                    <label className="label">
                                        <span className="label-text font-semibold">Price*</span>

                                    </label>
                                    <input type="number" defaultValue={update?.price} name='price' placeholder="Price" className="input input-bordered w-full " />
                                </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Toy Details</span>

                                </label>
                                <textarea name='description' defaultValue={update.des} className="textarea textarea-bordered h-24" placeholder="toy details"></textarea>

                            </div>

                            <button type='submit' className='btn btn-square modal-action bg-[#3ec5c7]  hover:bg-[#084d4e] text-white w-fit p-3 mt-2'>

                                <label htmlFor="my_modal_6" className="">Add Item!</label>
                            </button>
                        </form>

                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
        // <>

        //     <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
        //         <div className=" w-2/4 bg-white rounded container mx-auto ">
        //             <form onSubmit={handleUpdateItem} className=' w-full  max-w-6xl h-[500px]  p-8 container mx-auto'>
        //                 <div className='flex w-full gap-x-6'>
        //                     <div className=" w-full ">
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Toy Name*</span>

        //                         </label>
        //                         <input type="text" name='name'  placeholder="toy name" className="input input-bordered w-full " />

        //                     </div>
        //                     <div className=" w-full">
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Seller Name*</span>

        //                         </label>
        //                         <input type="text" name='sellerName' placeholder="seller name" className="input input-bordered w-full " />

        //                     </div>
        //                 </div>
        //                 <div className=' flex gap-x-6 w-full'>
        //                     <div className=" w-full">
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Seller Email*</span>

        //                         </label>
        //                         <input type="text" name='sellerEmail' value={user.email} placeholder="seller name" className="input input-bordered w-full " />

        //                     </div>
        //                     <div className=" w-full">
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Available quantity*</span>

        //                         </label>
        //                         <input type="number" name='quantity' placeholder="available quantity" className="input input-bordered w-full " />

        //                     </div>
        //                 </div>
        //                 <div className="w-full flex gap-x-6">
        //                     <div className='w-1/2'>
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Price*</span>

        //                         </label>
        //                         <input type="number" name='price' placeholder="Price" className="input input-bordered w-full " />
        //                     </div>
        //                     <div className="w-1/2">
        //                         <label className="label">
        //                             <span className="label-text font-semibold">Photo URL*</span>

        //                         </label>
        //                         <input type="text" name='photoURL' placeholder="Photo URL" className="w-full input input-bordered " />
        //                     </div>

        //                 </div>
                        
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text font-semibold">Toy Details</span>

        //                     </label>
        //                     <textarea name='description' className="textarea textarea-bordered h-24" placeholder="toy details"></textarea>

        //                 </div>

        //                 <input type='submit' value='Add Item' className='btn btn-square bg-[#3ec5c7] hover:bg-[#084d4e] text-white w-fit p-3 mt-2'></input>
        //             </form>
                    
        //         </div>
        //     </dialog>
        // </>
    );
};

export default AddToyModal;



