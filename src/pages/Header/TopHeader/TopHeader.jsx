import { BsTelephoneFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
const TopHeader = () => {
    return (
        <div className='md:flex justify-between px-28 py-5 hidden'>
           <div className='flex items-center gap-2'>
                <BsTelephoneFill/>
                <span>+88 01989-21 47 21</span>
                <MdMarkEmailRead className='ml-5' /> <span className='ml-2'>joybd.eee@gmail.com</span>
           </div>
           <div className='flex gap-5'>
                <p>Store Location</p>
                <p>Track Your Order</p>
           </div>
        </div>
    );
};

export default TopHeader;