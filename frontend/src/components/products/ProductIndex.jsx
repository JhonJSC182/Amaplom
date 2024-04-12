import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductIndex.css';
import { fetchProducts, selectProductsArray } from '../../store/productReducer';
import NavBar from '../nav/NavBar';
import { useParams } from 'react-router-dom';
// import loading from '../../images/loading.gif'
import { useState } from 'react';


const ProductIndex = props => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsArray);
    const { category } = useParams();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        dispatch(fetchProducts())
        // .then(() => setLoaded(true))
        // .catch(() => setLoaded(true))
    }, [dispatch]);

    // if (!loaded) {
    //     return (
    //       <div>
    //         <img src={loading} alt="loading" className='loadingGif' />
    //       </div>
    //     );
    //   }

    //   if (category !== 'electronics' && category !== 'books' &&  category !== 'home' && category !== 'fashion' && category !== 'all') {
    //     return (
    //       <div>
    //         <img src={loading} alt="loading" className='loadingGif' />
    //       </div>
    //     );
    //   }


    return (

        <div>
            <NavBar/>
            <ul className='productsIndexPage'>
                <div className="productsIndexDivider"></div>
                    <div className="productsContainer">
                        {products.map((product, index) => (
                        <div key={`${product.id}_${index}`}>
                            <ProductItem product={product}/>
                        </div>
                        
                        ))}
                </div>
            </ul>
        </div>
    )
}


export default ProductIndex