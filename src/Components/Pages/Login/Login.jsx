import  {  useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link,  } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import logo from '../../../assets/JobZeelogo.png'
import login from '../../../assets/login.png';
import './Login.css'
const Login = () => {
 
  const [role, setRole] = useState("");

 

  const handleLogin = async (e) => {
    
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    
    const password = form.password.value;
    console.log(email, password, role)
  }
  return (
    <div>
      
        <section className="authPage">
          <div className="container">
            <div className="header">
              <img src={logo} alt="logo" />
              <h3>Login to your account</h3>
            </div>
            <form onSubmit={handleLogin}>
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
              <button type="submit">
                Login
              </button>
              <Link to={"/register"}>Register Now</Link>
            </form>
          </div>
          <div className="banner">
            <img src={login} alt="login" />
          </div>
        </section>
    
    </div>
  );
};
export default Login;
