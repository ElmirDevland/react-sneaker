import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://64cf609affcda80aff51c9b0.mockapi.io/items')
      .then((items) => items.json())
      .then((data) => setSneakers(data));
  }, []);

  const addToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const showCart = () => {
    setCartOpen(!cartOpen);
    if (!cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpen && <Cart cartItems={cartItems} hideCart={showCart} />}
      <Header showCart={showCart} />
      <Content addToCart={addToCart} sneakers={sneakers} />
    </div>
  );
}

export default App;
