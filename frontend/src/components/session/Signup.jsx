import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/sessionReducer";
import './Signup.css'


const Signup = props => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();


    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createUser({name, email, password}))
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
                <div className='page-background'>
                    <div className='form-content'>
                    <form className="signup-form" onSubmit={handleSubmit}>
                    <h2 className="signup-signup" >Signup</h2>

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

export default Signup