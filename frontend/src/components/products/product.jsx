import NavBar from '../nav/NavBar.jsx'
import './product.css'
import placeholder from '../../images/default.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectProduct } from '../../store/productReducer.js';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Product = props => {

    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(selectProduct(productId))


    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    if(!product) {
        return null
    }

    return (
        <>
            <NavBar/>
            <div className='product-background'>
                <div className='product-img'>
                    <img className='placeholder-img' src={placeholder} alt="" />
                </div>

                <div className='description'>
                    <h3>{product.name}</h3>

                    <h1>${product.price}</h1>

                    <hr />

                    <p className='product-description' >{product.description}</p>
                    
                </div>

                <div className='transaction'>
                    <h1>${product.price}</h1>
                    <p className='in-stock'><b>In stock</b></p>

                <div className='custom-select'>
                    <p className='quantity'><b>Quantity: </b></p>
                    <select name="select" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>

                    <button>Add to cart</button>
                </div>
            </div>

            <div className='center'>
                <hr className='separator'/>
            </div>
        </>
        )
}

export default Product