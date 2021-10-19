import React from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    console.log('come from', location.state?.from);

    const handleGoogleLogin = () =>{
         signInUsingGoogle()
         .then(result =>{
              history.push(redirect_url)
         })  
    }
    return (
        <div className="">
            <div className=".login-form">
                <h1 className="mt-4">Login</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your Email"/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Enter your password"/>
                    <br/>
                    <input className="mt-3 bg-primary rounded " type="submit" value="submit" />
                </form>
                <p>New to Arch Creek Animal Clinic? <Link to="/register">Create Account</Link></p>
                <div>-----or--------</div>
            </div>
            <button
             className="btn-regular bg-primary rounded mb-5"
             onClick={handleGoogleLogin}
             >Google Sign In</button>
        </div>
    );
};

export default Login;