 
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4001/login", {
                username: formData.username,   
                password: formData.password
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert("Login Successful!");
            navigate('/dashboard');  

        } catch (err) {
            alert(err.response?.data?.msg || "Login failed");
        }
    };

    return (
        <div className="container">

            <form className="col-6 mx-auto p-5" onSubmit={handleSubmit}>
                <h2 className='mb-4' style={{ color: "#424242" }}>Login Now</h2>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-bold" style={{ color: "#424242" }}>Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your Username"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold" style={{ color: "#424242" }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='btn btn-success btn-sm fw-bold mb-3 login-btn'>Login</button> <br />
                <Link to="/signup" className=' '>if you don't have an account</Link>
            </form>
        </div>
    );
}

export default Login;