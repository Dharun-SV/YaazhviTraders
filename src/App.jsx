import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import WhatsAppButton from './components/WhatsAppButton';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/CartContext.jsx';
import CartModal from './components/CartModal.jsx';
import FloatingCart from './components/FloatingCart.jsx';
import { useState } from "react";

function App() {
   const [cartOpen, setCartOpen] = useState(false);
  return (
<CartProvider>
  <Router>

    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>

    <Footer />

              {/* Floating Cart */}
              {!cartOpen && (
                  <FloatingCart onClick={() => setCartOpen(true)} />
              )}

              {/* Cart Modal */}
              {cartOpen && (
                  <CartModal onClose={() => setCartOpen(false)} />
              )}
  </Router>
</CartProvider>

  );
}

export default App;
