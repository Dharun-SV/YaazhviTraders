import { useState } from "react";
import { useCart } from "./CartContext";

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("500g");
  const { addToCart } = useCart();

  const sizePrices = {
    "250g": Math.round(product.price * 0.6),
    "500g": product.price,
    "1kg": Math.round(product.price * 1.8),
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize,                 
      price: sizePrices[selectedSize],    
    });

    onClose(); 
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target.className === "modal-overlay") onClose();
      }}
    >
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>×</button>

        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>

        {/* Size Selector */}
        <div className="size-options">
          {["250g", "500g", "1kg"].map(size => (
            <button
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <p className="modal-price">
          ₹{sizePrices[selectedSize]}
        </p>

        <button className="add-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
