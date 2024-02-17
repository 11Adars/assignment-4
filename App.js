
import React, { useState } from 'react';
import './App.css';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    image: 'product1.jpg',
    price: 20,
    rating: 4,
    category: 'Category A',
  },
  
];

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
  };

  return (
    <div className="App">
      <header>
        <h1>Shopping Cart</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <nav>
        <ul>
          <li>All</li>
          <li>Category A</li>
          <li>Category B</li>
          {
            
          }
        </ul>
      </nav>
      <main>
        <div className="product-list">
          {productsData.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <aside>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default App;
