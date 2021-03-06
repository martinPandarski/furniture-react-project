import React, { useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import {formatNumber} from '../../../utils/utils'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../context/auth'

const CatalogCards = ({product, itemId}) => {
  const {currentUser} = useAuth();
  const { addProduct, cartItems, increase } = useContext(CartContext);
    const isInCart = product => {
        return !!cartItems.find(item => item.objectId === product.objectId);
    }
  return(
    <div className="card card-body">
    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
    src={product.pictureLink + '?v=' + product.objectId} alt=""/>
    <p>{product.name}</p>
    <h3 className="text-left">{formatNumber(product.pricePerOne)}</h3>
    <div className="text-right">
        <Link  to={'/details/' + itemId} className="btn btn-link btn-sm mr-2">Details</Link>

        {   currentUser ? 
            isInCart(product) && 
            <button 
            onClick={() => increase(product)}
            className="btn btn-outline-primary btn-sm">Add more</button>
            : ''
        }

        {   currentUser ? 
            !isInCart(product) && 
            <button 
            onClick={() => addProduct(product)}
            className="btn btn-primary btn-sm">Add to cart</button>
            : ''
        }
        
    </div>
</div>
  );
};

export default CatalogCards;

// , itemId, name, introText, pictureLink, pricePerOne