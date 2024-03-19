import { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import logo from "../../../assets/JobZeelogo.png";
import loginBanner from "../../../assets/login.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import toast from "react-hot-toast";
import auth from "../../../Firebase/firebase.init";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState("");
  const { login } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        const user = { email };
        axios
          .post("https://job-seeking-server-theta.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        toast.error("Incorrect Email or password");
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <section className="authPage ">
        <div className="container">
          <div className="header">
            <img src={logo} alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form className="" onSubmit={handleLogin}>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="JobZee@gmail.com"
                  name="email"
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit">Login</button>
            <button
              onClick={handleGoogleLogin}
              className="text-center align-middle select-none font-sans font-bold mt-2 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5  rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center justify-center gap-3"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="w-6 h-6"
              />
              Continue with Google
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src={loginBanner} alt="login" />
        </div>
      </section>
    </div>
  );
};
export default Login;
