import { useState } from 'react';
import '../../styles/Signup/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData);
            alert(res.data.message || "Signup successful");
            navigate("/login")
        } catch (err) {
            alert(err.response?.data?.msg || "Signup failed");
        }
    }
    return (

        <div className="container px-5">
            <div className="row p-5 text-center signup-hero-section">
                <h1 className="fs-2 mt-5 mb-3">Open a free demat and trading account online</h1>
                <p className='fs-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className='row p-5'>
                
                <div className="col">
                    <img src="media/Images/account_open.svg" alt="Account_Open_IMG_Error" />
                </div>

                <div className="col">

                    <h2 className='mb-4' style={{ color: "#424242" }}>Signup Now</h2>
                    <form action='/signup' method='post' className='col-9 signup-form' onSubmit={handleSubmit} >

                        <label htmlFor="email" className="form-label fw-bold">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your E-mail"
                            className="form-control mb-4"
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />


                        <label htmlFor="username" className='form-label fw-bold'>Username</label>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            placeholder='Enter your Username'
                            className='form-control mb-4'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password" className='form-label fw-bold'>Password</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            placeholder='Create your password'
                            className='form-control mb-4'
                            onChange={handleChange}
                            value={formData.password}
                            required
                        />
                        <button className='btn btn-primary btn-sm fw-bold mb-3 signup-btn'>Sign Up</button> <br />
                        <Link to="/login">if you Already have an account</Link>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Signup;