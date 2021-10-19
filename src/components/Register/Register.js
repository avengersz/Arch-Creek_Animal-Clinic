import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h1 className="mt-3">Create Account</h1>
                <form onSubmit="">
                    <input className="mt-2" type="email" name="" id="" placeholder="Enter Your Email"/>
                    <br/>
                   <input type="password" name="" id="" placeholder="Enter Your Password"/>
                <br/>
                <input type="password" name="" id="" placeholder="Re-enter Password"/>
                <br/>
                <input className="mt-3 bg-primary rounded" type="submit"value="submit"/>
                </form>

                <p>Already have an Account?<Link to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Register;