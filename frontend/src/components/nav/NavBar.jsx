import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectCurrentUser } from '../../store/sessionReducer';
import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import search from '../../images/search.png'

const NavBar = props => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <span className='session-links'>
                    <p>Hello {currentUser.name}</p> 
                    <button onClick={() => dispatch(logoutUser())}>
                        Logout
                    </button>
                </span>
            )
        } else {
            return (
                <div className='sessionLinks'>
                    <div className='dropdown'>
                        <div className='dropdown-label'>Hello, sign in</div>
                        <div className='dropdown-content'>
                            <ul className='list'>
                                <li>
                                    <NavLink className='signinLink' to='/signin'>Signin</NavLink>
                                </li>
                                <br />
                                <br />
                                <li>
                                    <NavLink className='signupLink' to='/signup'>New customer? Start here</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            )
        }
    }

    return (
        <>
            <div className='all'>
                <nav className='main-nav'>
                    <div className='upper-nav'>
                        <div className='home'>
                            <a href="/">
                                <img className='logo' src={logo} alt="" />
                            </a>
                        </div>
                        <div className='middle'>
                            <input placeholder='Search Amazon' className='searchBar' type='text' />
                            <img className='search-pic' src={search} alt="" />
                        </div>
                    {sessionLinks()}

                    </div>
                </nav>

                <div className='main-low'>
                    <div className='lower-nav'>
                            <a className='nav-links' href="">Electronics</a>
                            <a className='nav-links' href="">Best Sellers</a>
                            <a className='nav-links' href="">Books</a>
                            <a className='nav-links' href="">New Releases</a>
                            <a className='nav-links' href="">Music</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;