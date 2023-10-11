import { useState, useEffect, useRef, useContext } from "react";
import logo from "../../../assets/logo/kinderlogo.png"
import { BiSolidUserCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const MiddleHeader = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between md:px-36 w-full px-16 py-5 bg-[#ffffff]">
            <div>
                <img className="md:w-40 w-20" src={logo} alt="" />
            </div>
            <div>
                <div className={`dropdown dropdown-bottom `} ref={dropdownRef}>
                    <BiSolidUserCircle tabIndex={0}
                        // data-tip={user.displayName}
                        className="text-4xl cursor-pointer w-full"
                        onClick={toggleDropdown} />
                    {
                        isOpen && <ul tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-48 px-2 bg-transparent"
                        >
                            {
                                user ? <li><button onClick={handleLogout} className="bg-blue-600 w-full">Loguot</button></li> : <><li className="font-lora"><Link to="/login">Login</Link></li>
                                    <li className="font-lora"
                                    ><Link to="/signup">Create New Account</Link></li></>
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;


// import { useState, useEffect, useRef, useContext } from "react";
// import logo from "../../../assets/logo/kinderlogo.png";
// import { BiSolidUserCircle } from 'react-icons/bi';
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProviders";

// const MiddleHeader = () => {
//     const { user, logOut } = useContext(AuthContext)
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLogout = () => {
//         logOut()
//             .then(() => { })
//             .catch(err => console.log(err));
//     }

//     const toggleStickyNavbar = () => {
//         if (window.scrollY > 0) {
//             setIsSticky(true);
//         } else {
//             setIsSticky(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", toggleStickyNavbar);
//         return () => {
//             window.removeEventListener("scroll", toggleStickyNavbar);
//         };
//     }, []);

//     return (
//         <div className={`flex items-center justify-between md:px-36 px-16 py-5 bg-[#ffffff] ${isSticky ? 'sticky top-0 shadow-lg' : ''}`}>
//             <div>
//                 <img className="md:w-40 w-20" src={logo} alt="" />
//             </div>
//             <div>
//                 <div className={`dropdown dropdown-bottom `} ref={dropdownRef}>
//                     <BiSolidUserCircle tabIndex={0}
//                         className="text-4xl cursor-pointer"
//                         onClick={toggleDropdown} />
//                     {
//                         isOpen && <ul tabIndex={0}
//                             className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
//                         >
//                             {
//                                 user ? <li><button onClick={handleLogout} className="bg-blue-600">Logout</button></li> : <>
//                                     <li className="font-lora"><Link to="/login">Login</Link></li>
//                                     <li className="font-lora"><Link to="/signup">Create New Account</Link></li>
//                                 </>
//                             }
//                         </ul>
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MiddleHeader;
