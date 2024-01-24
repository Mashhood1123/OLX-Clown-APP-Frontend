import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { url, heading, description, id } = props;
  return (
    <div class="card">
      <img src={url} alt="Dices" />
      <div class="like-button">&#10084;</div>
      <Link to={`/product/${id}`} className="cardLink">
        <h2 class="heading">{heading}</h2>
      </Link>
      <p class="description">{description}</p>
    </div>
  );
};

export default ProductCard;
