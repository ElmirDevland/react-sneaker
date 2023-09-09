import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://64cf609affcda80aff51c9b0.mockapi.io/items')
      .then((items) => items.json())
      .then((data) => setSneakers(data));
  }, []);

  const openCart = () => {
    setCartOpen(!cartOpen);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="wrapper clear">
      <Cart openCart={openCart} cartOpen={cartOpen} />
      <Header openCart={openCart} />
      <Content sneakers={sneakers} />
    </div>
  );
}

export default App;
