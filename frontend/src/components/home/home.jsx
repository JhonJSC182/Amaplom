import './home.css'
import background from '../../images/background.jpg'
import electronics from '../../images/electronics.jpg'
import books from '../../images/books.jpg'
import bestSeller from '../../images/bestSellers.jpg'
import newReleases from '../../images/newReleases.jpg'
import NavBar from '../nav/NavBar'
import { NavLink } from 'react-router-dom'


const Home = props => {

    return (
        <>
        <NavBar/>

        <div className='mid-point'>
            <div className='background-img'>
                <img src={background} alt="" />

    
                    <div className='first-row'>
                        <div className='column-1'>    
                        <NavLink to='/categories/electronics'>
                            <h2>Shop Electronics</h2>
                            <img className='electronics-img' src={electronics} alt="" />
                        </NavLink>
                        </div>
                        <div className='column-2'>  

                        <NavLink to='/categories/books'>
                            <h2>Books</h2>
                            <img className='books-img' src={books} alt="" />
    
                        </NavLink>  
                        </div>
                        <div className='column-3'>  

                        <NavLink to='/categories/bestseller'>
                            <h2>Best Sellers</h2>
                            <img className='bestSeller-img' src={bestSeller} alt="" />
                            
                        </NavLink>  
                        </div>
                        <div className='column-4'>  

                        <NavLink to='/categories/newReleases'>
                            <h2>New Releases</h2>
                            <img className='newReleases-img' src={newReleases} alt="" />
                            
                        </NavLink>  
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}


export default Home