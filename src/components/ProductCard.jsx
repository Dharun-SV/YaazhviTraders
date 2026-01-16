import { useCart } from "./CartContext";

const ProductCard = ({ product, onView }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <p className="size">{product.size}</p>
      <p className="price">₹{product.price}</p>

      {/* Combo Section */}
      {product.combo && product.combo.length > 0 && (
        <div className="combo-section">
          <h6>Combo Includes:</h6>
          <ul>
            {product.combo.map((item, index) => (
              <li key={index}>
                {item.name} - {item.size} - ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="product-actions">
        <button className="btn-buy" onClick={() => onView(product)}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
