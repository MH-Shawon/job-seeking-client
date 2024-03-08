import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../../assets/JobZeelogo.png";
import register from "../../../assets/register.png";

import { AuthContext } from "../../Providers/Auth/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [role, setRole] = useState("");
    const { createUser } = useContext(AuthContext);
    const [error, setRegisterError] = useState(false);
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError(
                " Password must be at least 6 characters, include one lowercase letter, one uppercase letter, and one special character."
            );
            return;
        }

        // create user
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user.displayName);
                toast.success("User Created Successfully!");
                return updateProfile(user, { displayName: name });
                // Update profile with display name
                
                
            })
            
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <section className="authPage">
                <div className="container">
                    <div className="header">
                        <img src={logo} alt="logo" />
                        <h3>Create a new account</h3>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="inputTag">
                            <label>Register As</label>
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
                            <label>Name</label>
                            <div>
                                <input type="text" placeholder="JobZee" name="name" />
                                <FaPencilAlt />
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
                            <label>Phone Number</label>
                            <div>
                                <input type="number" placeholder="+880" name="phone" />
                                <FaPhoneFlip />
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
                        <button type="submit">Register</button>
                        <p className="text-red-600">{error}</p>
                        <Link to={"/login"}>Login Now</Link>
                    </form>
                </div>
                <div className="banner">
                    <img src={register} alt="Register" />
                </div>
            </section>
        </div>
    );
};
export default Register;
