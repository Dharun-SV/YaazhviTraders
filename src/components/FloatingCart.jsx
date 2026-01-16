import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import '../assets/css/FloatingCart.css';

const FloatingCart = ({ onClick }) => {
  const { cart } = useCart();

  return (
    <div className="floating-cart" onClick={onClick}>
      <FaShoppingCart size={24} />
      {cart.length > 0 && (
        <span className="cart-count">{cart.length}</span>
      )}
    </div>
  );
};
export default FloatingCart;
