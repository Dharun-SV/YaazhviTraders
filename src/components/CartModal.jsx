import { useCart } from "./CartContext";
import "../assets/css/CartModal.css";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart } = useCart();

  // ✅ Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const message = encodeURIComponent(
      `Hello, I want to place an order:\n\n${cart
        .map(
          (item, index) =>
            `${index + 1}. ${item.name} (${item.size})\n` +
            `Qty: ${item.quantity} × ₹${item.price} = ₹${item.totalPrice}`
        )
        .join("\n\n")}\n\nGrand Total: ₹${totalPrice}\n\nName:\nPhone:\nAddress:`
    );

    const phoneNumber = "917825067092"; // change to your number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="cart-modal-overlay"
      onClick={(e) =>
        e.target.classList.contains("cart-modal-overlay") && onClose()
      }
    >
      <div className="cart-modal">
        
        {/* HEADER */}
        <div className="cart-modal-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* BODY (Scrollable) */}
        <div className="cart-modal-body">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                className="cart-item"
                key={`${item.id}-${item.size}`}
              >
                <img src={item.image} alt={item.name} />

                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-size">Size: {item.size}</p>
                  <p className="item-qty">Qty: {item.quantity}</p>
                  <p className="item-price">₹{item.totalPrice}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* ✅ STICKY FOOTER */}
        {cart.length > 0 && (
          <div className="cart-modal-footer">
            <p className="total-price">
              Grand Total: ₹{totalPrice}
            </p>

            <button
              className="whatsapp-btn"
              onClick={sendWhatsAppOrder}
            >
              Place Order via WhatsApp
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartModal;
