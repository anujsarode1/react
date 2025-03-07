import React, { useState } from 'react';
import './Sliderbar.css'; 

const Sliderbar = () => {
  const [cartItems, setCartItems] = useState([]); 

  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/23dfdf0d-2886-4ac0-beac-fe23a342de82._CR0,0,2399,1256_SX430_QL70_.png' },
    { id: 2, name: 'Product 2', price: '$29.99', imageUrl: 'https://cdn.pixabay.com/photo/2024/04/26/18/07/summer-8722383_640.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$49.99', imageUrl: 'https://via.placeholder.com/150' },
  ];


  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">MyShop</div>
          <div className="cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/73/73269.png"
              alt="Basket"
              className="basket-logo"
            />
            <span className="cart-count">{cartItems.length}</span> 
          </div>
        </div>
      </nav>

      {/* Product Cards */}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart Slider */}
      <div className="cart-slider">
        <h2>Cart</h2>
        <div className="slider-container">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="slider">
              {cartItems.map((item, index) => (
                <div key={index} className="slider-item">
                  <img src={item.imageUrl} alt={item.name} className="slider-item-image" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sliderbar;
