import './Troduct.css'

function Troduct( {title, image, price, rating}) {
    return  (
        <div className='troduct'>
            <div className='troduct_info'>
                <p>{title}</p>
                <p className='troduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="troduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Troduct;
