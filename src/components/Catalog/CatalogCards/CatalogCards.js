
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './CatalogCards.css'
const CatalogCards = ({ name, description, pictureLink, pricePerOne }) => {
  return(
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={pictureLink} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
   <Link to="/details/:id">Details</Link>
   <Link to="/details/:id">Add to Cart</Link>
    

  </Card.Body>
</Card>
  );
};

export default CatalogCards;