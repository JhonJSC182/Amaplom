import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/sessionReducer';
import { selectCurrentUser } from '../../store/sessionReducer';
import { logoutUser } from '../../store/sessionReducer';
import './Signin.css'


const Signin = props => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginUser({email, password}))
    }

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <div>
                    <p>Hello {currentUser.name}</p> 
                    <button onClick={() => dispatch(logoutUser())}>
                        Logout
                    </button>
                </div>
            )
        } else {
            return (
                <div className='signin-page-background'>
                    <div className='sign-in-form-content'>
                        <form className='login-form' onSubmit={handleSubmit}>
                        <h2 className='signin-signin'>Sign in</h2>
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
                            <input className='signin-submit' type='submit' />
                        </form>
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