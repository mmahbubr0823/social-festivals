import { Link, NavLink } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import { useContext } from "react";
import { authContext } from "../AuthProvider/MyAuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    // console.log(user);

    const handleLogOut = ()=>{
        logOut()
        .then(result =>{
            toast.success('User successfully logged out')
            
        })
        .catch(err =>{
            toast.error('Something went wrong')
        })
    }

    const links = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
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
                    <a className="btn btn-ghost normal-case text-3xl">Social <span className="text-[#fa4a4a]">Festivals</span> Arrangement</a>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="flex items-center navbar-end">
                    <div className="mr-16">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {
                        user ?
                            <div>
                                <div className="flex items-center gap-5">
                                <button onClick={handleLogOut} className="px-2 py-1 rounded-md bg-[#f56d6d]">Log out</button>
                                <div className="">
                                <h1>{user.displayName}</h1>
                                <img className="w-[60px] rounded-full mb-3" src={user.photoURL} alt="" />
                                </div>
                            </div>
                            </div>
                            :
                            <div>
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