import './Checkout.css'
import NavBar from '../nav/NavBar'
import Subtotal from './Subtotal'


const Checkout = props => {


    return (
        <>
            <NavBar />

            <div className='checkout'> 
                <div className='checkout_left'>


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