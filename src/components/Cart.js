const Cart = () => {
  return (
    <div style={{ display: 'none' }} className="cart-overlay">
      <div className="cart-body d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img
            className="close-btn cu-p"
            src="/img/icons/delete.svg"
            alt="close"
          />
        </h2>
        <div className="items flex">
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>

          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>

          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
          <div className="cart-item d-flex justify-between align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cart-item-img"
            ></div>
            <div className="description">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="deleted-btn"
              src="/img/icons/delete.svg"
              alt="delete"
            />
          </div>
        </div>

        <div className="total-block">
          <ul>
            <li>
              <p>Итого:</p>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <p>Налог 5%:</p>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <button className="green-button">
            Оформить заказ
            <img src="/img/icons/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
