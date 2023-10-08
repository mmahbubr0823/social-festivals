import { Link, NavLink } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import { useContext } from "react";
import { authContext } from "../AuthProvider/MyAuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('User successfully logged out')

            })
            .catch(err => {
                toast.error('Something went wrong')
            })
    }

    const links = <>

        <li className="lg:mr-0"><NavLink to="/">Home</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/register">Register</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/about">About us</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/gallery">Gallery</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar block lg:flex bg-base-100 my-8">
                <div className="lg:navbar-start block text-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className=" normal-case lg:text-xl xl:text-2xl">Social <span className="text-[#fa4a4a]">Festivals</span> Arrangement</a>
                </div>
                <div className="flex items-center lg:navbar-center xl:navbar-end">
                    <div className="lg:mr- xl:mr-8">
                        <ul className="menu hidden lg:flex menu-horizontal px-1">
                            {
                                links
                            }

                        </ul>
                    </div>
                    {
                        user ?
                            <div className="flex">
                                <div className="md:flex items-center gap-5">
                                    <button onClick={handleLogOut} className="px-2 py-1 rounded-md bg-[#f56d6d]">Log out</button>
                                    <div className="">
                                        <h1>{user.displayName}</h1>
                                        <img className="w-[60px] rounded-full mb-3" src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="flex">
                                <div className="flex gap-4 items-center">
                                    <Link className="px-2 py-1 rounded-md bg-[#f56d6d]" to="/login">Login</Link>
                                    <CgProfile className="text-4xl"></CgProfile>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;