import  { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Register.css'
import logo from '../../../assets/JobZeelogo.png'
import register from '../../../assets/register.png'

const Register = () => {
    const [role, setRole] = useState("");

    

    const handleRegister =  (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        console.log(email,name,phone, password,role)
    }
    return(
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
                                <input
                                    type="text"
                                    placeholder="JobZee"
                                    name="name"
                                />
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
                                <input
                                    type="number"
                                    placeholder="+880"
                                    name="phone"
                                />
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
                        <button type="submit" >
                            Register
                        </button>
                        <Link to={"/login"}>Login Now</Link>
                    </form>
                </div>
                <div className="banner">
                    <img src={register} alt="Register" />
                </div>
            </section>
        </div>
    )}
export default Register;