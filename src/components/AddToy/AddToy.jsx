import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const onSubmit = (toy) => {
        fetch('https://education-toys-server-iota.vercel.app/singletoy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(toy),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New item added done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset()
            });
    };
    return (
        <div className='p-5 my-28'>
            {/* <div className='flex rounded justify-center items-center shadow-xl border-2'>
                <img className='w-1/2 h-96  px-5 py-4 rounded' src={addToToy} alt='' />
                <div className='w-1/2'>
                    <h2 className='text-4xl font-bold'>Add To Toy</h2>
                </div>
            </div> */}
            <div className=''>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-4 shadow py-4 bg-transparent'>
                    <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto py-3'>
                        <div>
                            <label htmlFor=''>Toys Name</label> <br />
                            <input
                                {...register('name', { required: true })}
                                defaultValue={user?.name}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Photo Url</label> <br />
                            <input
                                {...register('image', { required: true })}
                                className='bg-transparent  p-2 rounded  w-full border'
                            />
                            {errors.image && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Seller Name</label> <br />
                            <input
                                {...register('sellerName', { required: true })}
                                defaultValue={user?.sellerName}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.sellerName && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Seller Email</label> <br />
                            <input
                                {...register('sellerEmail', { required: true })}
                                defaultValue={user.email}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.sellerEmail && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className='mb-2'>Category</label> <br />
                            <select
                                className='bg-transparent  p-2 mt-1 rounded w-full border'
                                {...register('category')}>
                                <option value="Math Toys">Select Category</option>
                                <option value="Math Toys">Math Toys</option>
                                <option value="Language Toys">Language Toys</option>
                                <option value='Engineering Toys'>Engineerig Toys</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor=''>Price</label> <br />
                            <input
                                {...register('price')}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.price && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Rating</label> <br />
                            <input
                                {...register('rating')}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.rating && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Quantity</label> <br />
                            <input
                                {...register('quantity')}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.quantity && <span>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor=''>Description</label> <br />
                            <input
                                {...register('description')}
                                className='bg-transparent  p-2 rounded w-full border'
                            />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <input
                            className='bg-[#3ec5c7] p-1 rounded cursor-pointer text-lg text-white font-semibold font-roboto'
                            type='submit'
                            value='Submit'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;