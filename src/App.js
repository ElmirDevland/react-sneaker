function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-45">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" alt="logo" />
          <div className="ml-15">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
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

      <div className="content">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
