const Header = () => {
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
        <li>
          <img src="/img/icons/cart.svg" alt="logo" />

          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/icons/user.svg" alt="logo" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
