const Header = ({ showCart }) => {
  return (
    <header className="d-flex justify-between align-center p-45">
      <div className="d-flex align-center">
        <img src="/img/logo.svg" alt="logo" />
        <div className="ml-15">
          <h3>React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={showCart}>
          <img src="/img/icons/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/icons/fav.svg" alt="fav" />
        </li>
        <li>
          <img src="/img/icons/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
