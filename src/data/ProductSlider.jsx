import { useRef, useEffect, useState } from "react";
import "../assets/css/ProductSlider.css";
import Spacer from '../components/Spacer.jsx';

const ProductSlider = ({ products = [] }) => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const isPaused = useRef(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const speed = 0.25;
  const duplicated = [...products, ...products];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll only for desktop
  useEffect(() => {
    if (isMobile) return;

    const loop = () => {
      const container = scrollRef.current;
      if (!container || isPaused.current) return;

      container.scrollLeft += speed;
      const half = container.scrollWidth / 2;
      if (container.scrollLeft >= half) {
        container.scrollLeft -= half;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile, products.length]);

  // ---------------- MOBILE VIEW ----------------
  if (isMobile) {
      return (
          <div className="product-section">
              <div className="container">
                  <div className="text-center mb-3">
                      <h3><span className="orange-text">Our</span> Products</h3>
                  </div>
          {/* Show first 3 products as one-by-one cards */}
          {products.slice(0, 3).map((item, index) => (
            <div key={index} className="mobile-product-card">
              <img src={item.image} alt={item.name} />
              <div className="sc-name">{item.name}</div>
              <div className="sc-size">{item.size}</div>
              <div className="sc-price">₹{item.price}</div>
            </div>
          ))}

          {/* View More Button */}
          <div className="text-center mt-3">
            <a href="/products" className="btn-brand">
              View More Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- DESKTOP SLIDER ----------------
    return (
        <div className="product-section">

            <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title">
                    <h3><span className="orange-text">Our</span> Products</h3>
                </div>
            </div>

            <div className="carousel-container">
        <div className="product-scroll" ref={scrollRef}>
          {duplicated.map((item, index) => (
            <div key={index} className="product-card">
              <div className="simple-card">
                <img src={item.image} alt={item.name} />
                <div className="sc-name">{item.name}</div>
                <div className="sc-size">{item.size}</div>
                      <div className="sc-price">₹{item.price}</div>
                  </div>
              </div>
          ))}
              </div>
          </div>
           <Spacer height="10px" /> 
          <div className="text-center mt-3">
              <a href="/products" className="btn-brand">
                  View More Products
              </a>
          </div>
    </div>
  );
};

export default ProductSlider;
