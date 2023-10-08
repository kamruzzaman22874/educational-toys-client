import { Link } from "react-router-dom";
import MiddleHeader from "../MiddleHeader/MiddleHeader";

const Navbar = () => {
    const navItems = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/alltoy">ALL TOY</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/myotoy">MY TOY</Link></li>
        <li><Link to="/addtoy">ADD TOY</Link></li>

    </>
    return (
        <div className="font-roboto font-semibold">
            {/* <TopHeader/> */}
            <MiddleHeader/>
            <div className="navbar bg-[#3ec5c7] z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl text-white font-serif">
                        {navItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            </div>
        </div>
    );
};

export default Navbar;