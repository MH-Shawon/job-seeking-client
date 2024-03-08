import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navlinks = (
    <>
      <div className="flex font-poppins text-lg tracking-[-0.342px]">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/ourstory">Our Story</NavLink>
        </li>

        <>
          {user?.email && (
            <>
              <li>
                <NavLink to="/productsDetails">Details</NavLink>
              </li>
              <li>
                <NavLink to="/myCart">My Cart</NavLink>
              </li>
            </>
          )}
        </>
      </div>
    </>
  );
  return (
    <div className="navbar bg-[#e1e3e9] h-10 lg:px-24 sticky top-0 z-10 bg-opacity-50 backdrop-blur-4xl backdrop-saturate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>

        <Link to="/" className="w-[145px] h-[45px] my-auto ">
          <img className=" w-full h-full rounded" src={logo} alt="" />
          
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
              >
                <li>
                  <a className="flex items-center justify-center">
                    {user?.displayName}
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center"
                    onClick={handleSignOut}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
