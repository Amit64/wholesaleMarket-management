import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register,  handleSubmit } = useForm();
    const onSubmit = data => {
        
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                        

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be 6 characters long'
                                    }
                                })}
                            />
                      

                        </div>

                        
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>Don't Have Account ? <Link className='text-primary' to="/signup">Please Register...</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                    
                        className="btn btn-outline text-xl"
                    > <span className='text-3xl'><FcGoogle/></span>oole Login</button>
                </div>
            </div>
        </div >
    );
};

export default Login;