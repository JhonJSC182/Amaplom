import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectCurrentUser } from "../../store/sessionReducer";
import './Signup.css';
import whitelogo from '../../images/whitelogo.jpg';
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";


const Signup = props => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createUser({name, email, password}))
        .catch(async res => {
            let data = await res.json();
            // console.log(data)
            setErrors(data)
        })
    }

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <Navigate to='/' />
            )
        } else {
            return (
                <div className='page-background'>

                        <div className='signup-img'>
                            <a href="/">
                                <img className="signup-whitelogo" src={whitelogo} alt="" />
                            </a>
                        </div>

                    <div className="signup-box">

                    <div className='form-content'>

                        <form className="signup-form" onSubmit={handleSubmit}>
                        <h2 className="signup-signup" >Signup</h2>

                            <div className="singup-errors">{errors.map((err, idx) => (<p key={idx}>{err}</p>)) }</div>
                            
                            <label className="signup-label">Name</label>
                            <input 
                            className="signup-form-input"
                            placeholder='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />

                            <label className="signup-label">Email</label>
                            <input 
                            className="signup-form-input"
                            placeholder='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />

                            <label className="signup-label">Password</label>
                            <input 
                            className="signup-form-input"
                            placeholder='password'
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <input className="signup-submit" type='submit' />
                            
                            
                            <hr />

                            <div>
                                <p>Already have an account?
                                    <a className="signin-redirect" href="/signin"> Sigin</a>
                                </p>
                                
                            </div>

                        </form>
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

export default Signup