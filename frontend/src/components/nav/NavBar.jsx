import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectCurrentUser } from '../../store/sessionReducer';
import './NavBar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logos from '../../images/logos.png'
import flag from '../../images/flag.jpg'
import background from '../../images/background.jpg'
import electronics from '../../images/electronics.jpg'
import books from '../../images/books.jpg'
import bestSeller from '../../images/bestSellers.jpg'
import newReleases from '../../images/newReleases.jpg'

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
                                <img className='logo' src={logos} alt="" />
                            </a>
                        </div>

                        <div className='address-container'>
                        <div className='location'><i class="fa-solid fa-location-dot"></i></div>
                                {/* <img className='location' src={location} /> */}
                                <p>Select your address</p>
                        </div>

                        <div className='middle'>
                            <select className='search-select'><option value="">All</option></select>
                            <input placeholder='Search Amazon' className='searchBar' type='text' />
                            <div className='search-pic' >
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {/* <img className='search-pic' src={search} alt="" /> */}
                        </div>

                        <div className='language-container'>
                            <p>EN</p>
                            <div className='language-img'>
                                <img src={flag} alt="" />
                            </div>
                        </div>
                    {sessionLinks()}

                    <div className='cart-container'>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>

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

                <div className='mid-point'>
                    <div className='background-img'>
                        <img src={background} alt="" />

    
                        <div className='first-row'>
                            <div className='column-1'>    
                                <h2>Shop Electronics</h2>

                                <img className='electronics-img' src={electronics} alt="" />
                            </div>
                            <div className='column-2'>    
                                <h2>Books</h2>

                                <img className='books-img' src={books} alt="" />
                            </div>
                            <div className='column-3'>    
                                <h2>Best Sellers</h2>

                                <img className='bestSeller-img' src={bestSeller} alt="" />
                            </div>
                            <div className='column-4'>    
                                <h2>New Releases</h2>

                                <img className='newReleases-img' src={newReleases} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default NavBar;