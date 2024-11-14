"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            localStorage.setItem('user', JSON.stringify(storedUser));
            Swal.fire("Login successful!");

            window.location.href = '/';
        } else {
            Swal.fire("Invalid credentials!");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    {/* login form */}
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" onChange={handleChange} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary rounded-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;