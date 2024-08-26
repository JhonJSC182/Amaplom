import './Checkout.css'
import NavBar from '../nav/NavBar'
import Subtotal from './Subtotal'
import amazon_ad from '../../images/amazon_ad.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'
import { fetchCartItem, fetchCartItems } from '../../store/cartItemReducer'
import { selectCurrentUser } from '../../store/sessionReducer'
import { useNavigate, useParams } from 'react-router-dom'

const Checkout = props => {


    return (
        <>
            <NavBar />

            <div className='checkout'> 
                <div className='checkout_left'>
                    <img className='checkout_ad' src={amazon_ad} alt="" />

                    <div>
                        <h2 className='checkout_title'>
                            Your shopping basket
                        </h2>
                    </div>

                </div>

                <div className="checkout_right">
                   <Subtotal />

                </div>

            </div>
        </>

    )
}

export default Checkout