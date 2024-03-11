import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";

const NavLinks=()=>{
    const { user } = useContext(AuthContext);
    return(
        <>
            <div className="flex font-poppins text-lg tracking-[-0.342px]">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/alljobs">All Jobs</NavLink>
                </li>
                <li>
                    <NavLink to="/story">Story</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                </li>

                <>
                    {user?.email && (
                        <>
                            <li>
                                <NavLink to="/applied">applied Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addjobs">Add A Job</NavLink>
                            </li>
                            <li>
                                <NavLink to="/myjobs">My Jobs</NavLink>
                            </li>
                        </>
                    )}
                </>
            </div>
        </>
    )}
export default NavLinks;