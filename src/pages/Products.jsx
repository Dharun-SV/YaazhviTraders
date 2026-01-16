import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../assets/css/products.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
      <div className="products-page">
          <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="section-title">
                      <h3><span className="orange-text">Dry</span> Fruits & Nuts</h3>
                  </div>
              </div>
          </div>
          <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onView={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
