import NavBar from '../nav/NavBar.jsx'
import './product.css'
import electronics from '../../images/electronics.jpg'
import background from '../../images/background.jpg'
import books from '../../images/books.jpg'
import bestSeller from '../../images/bestSellers.jpg'
import newReleases from '../../images/newReleases.jpg'

const Product = props => {
    return (
        <>
            <NavBar/>
            <br />
            <br />
            <br />
            <br />
            <br />
            
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


        </>
        )
}

export default Product