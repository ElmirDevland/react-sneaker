import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const ITEMS_API = 'http://localhost:3000/sneakers';
  const CART_API = 'http://localhost:3000/cart';
  const FAV_API = 'http://localhost:3000/favorites';

  const [cartOpen, setCartOpen] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const showCart = (e) => {
    setCartOpen(!cartOpen);
    if (!cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    axios.get(ITEMS_API).then((res) => {
      setSneakers(res.data);
    });

    axios.get(CART_API).then((res) => {
      setCartItems(res.data);
    });

    axios.get(FAV_API).then((res) => {
      setFavItems(res.data);
    });
  }, []);

  const addToCart = async (obj) => {
    const { data } = await axios.post(CART_API, obj);
    setCartItems((prev) => [...prev, data]);
  };

  const addToFav = async (obj) => {
    try {
      if (favItems.find((itemFav) => itemFav.id === obj.id)) {
        setTimeout(() => {
          axios.delete(`${FAV_API}/${obj.id}`);
        }, 500);
        setFavItems(favItems.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(FAV_API, obj);
        setFavItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить, повторите заново!');
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`${CART_API}/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeFromFav = (id) => {
    axios.delete(`${FAV_API}/${id}`);
    setFavItems(favItems.filter((item) => item.id !== id));
  };

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Cart
          cartItems={cartItems}
          hideCart={showCart}
          removeFromCart={removeFromCart}
        />
      )}
      <Header showCart={showCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sneakers={sneakers}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              addToCart={addToCart}
              onChangeSearchValue={onChangeSearchValue}
              addToFav={addToFav}
              removeFromFav={removeFromFav}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              favItems={favItems}
              removeFromFav={removeFromFav}
              addToFav={addToFav}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
