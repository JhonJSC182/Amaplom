import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/sessionReducer';
import { selectCurrentUser } from '../../store/sessionReducer';
import { logoutUser } from '../../store/sessionReducer';
import whitelogo from '../../images/whitelogo.jpg'
import './Signin.css'
import { NavLink, Navigate } from 'react-router-dom';


const Signin = props => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const demoUser = e => {
        e.preventDefault();

        dispatch(loginUser({email: 'demo@user.io', password: 'password'}))
    }
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginUser({email, password}))
        .catch(async res => {
            let data = await res.json();
            setErrors(data.errors)
        })
    }

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <Navigate to='/' />
            )
        } else {
            return (
                <div className='signin-page-background'>
                    

                    <div className='signin-img'>
                        <a href='/'>
                        <img className='whitelogo' src={whitelogo} alt="" />
                        </a>
                    </div>

                    <div className='signin-box'>
                        
                    <div className='sign-in-form-content'>
                        
                        <form className='login-form' onSubmit={handleSubmit}>
                        <h2 className='signin-signin'>Sign in</h2>

                        <div className='signin-errors'>{errors.map((err, idx) => (<p key={idx}>{err}</p>)) }</div>

                        <label className='signin-label'>Email </label>
                            <input 
                            className='signin-form-input'
                            placeholder='email'

                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                           

                        <label className='signin-label'>Password </label>
                            <input 
                            className='signin-form-input'
                            placeholder='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <input className='signin-submit' type='submit' placeholder='Continue'/>
                            <button className="demo" onClick={demoUser}>Demo login</button>

                            <p className='conditions'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>

                            <hr />
                            
                        </form>
                    </div>
                    <div className='line'> 
                        <p className='newAccount'>New to Amazon?</p>
                    </div>

                    <div className='create-account'>
                        <NavLink className='link' to={'/signup'}>
                            <button className='create-button' type="submit">Create your Amazon account</button>
                        </NavLink>
                    </div>

                    </div>
                </div>
            )
        }
    }


    return (
        <div>
        {sessionLinks()}
        </div>
    )
}

export default Signin