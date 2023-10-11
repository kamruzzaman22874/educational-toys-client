import Swal from "sweetalert2";
import UpdateModal from "../UpdateModal/UpdateModal";

const AddToyModal = ({ isOpen, setIsOpen, details }) => {
    console.log(details);
    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(name,  price, quantity);

        const updateItem = {
            price,
            quantity,
            description,
        }

        fetch(`http://localhost:5000/toys/${details?._id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Udpade successfully done',
                        'success'
                    )
                }
            })
    }


    
    return (
        <UpdateModal className="w-full" isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleUpdate}>

                <div className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Toy Name*</span>
                    </label>
                    <input
                        defaultValue={details?.name}
                        readOnly
                        type="text"
                        name='name'
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
                    {/* <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Category*</span>
                        </label>

                        <select
                            defaultValue={"Recipe Category"}
                            className="select select-primary w-full"
                            name="category">
                            <option value="Math Toys">Select Category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value='Engineering Toys'>Engineerig Toys</option>
                        </select>
                    </div> */}
                    <div className="form-control w-full">
                        <label htmlFor="price" className="label">
                            <span className="label-text">Quantity*</span>
                        </label>
                        <input
                            defaultValue={details?.quantity}
                            type="number"
                            name='quantity'
                            placeholder="Toys quantity"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="price" className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            defaultValue={details?.price}
                            type="text"
                            name='price'
                            placeholder="Toys price"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Toys Description*</span>
                    </label>
                    <textarea
                        className="textarea border h-40"
                        name='description'
                        placeholder="toys description"
                        required
                        style={{ resize: 'none', overflow: 'auto' }}
                    ></textarea>
                </div>
                <div className="my-5">
                    <button method="dialog" type='submit'
                        className='bg-[#3ec5c7] py-3 px-6 rounded-md text-white capitalize flex gap-2'>
                        <span>Update Toys</span>
                    </button>
                </div>
            </form>
        </UpdateModal>
    );
};

export default AddToyModal;