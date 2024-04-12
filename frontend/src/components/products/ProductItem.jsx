import { NavLink  } from 'react-router-dom';
import placeholder from '../../images/default.png'
import './ProductIndex.css';
import { useParams } from 'react-router-dom';

const ProductItem = (({ product }) => {
  const { category } = useParams();

  if ((product.category !== category) && (category !== "all")) {
    return null;
}
    
  return (
    <NavLink className="productCard" to={`/products/${product.id}`}>
      <img className='productImg' src={placeholder} />
      <div className="cardContent">
        <p className='productNameH3'>{product.name}</p>
        <p className='productPrice'>${product.price}</p>
      </div>
    </NavLink>
  );
});

export default ProductItem;