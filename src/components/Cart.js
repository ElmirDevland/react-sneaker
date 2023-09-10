const Cart = ({ hideCart, cartItems = [] }) => {
  return (
    <div className="cart-overlay">
      <div className="cart-body d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img
            className="close-btn cu-p"
            src="/img/icons/delete.svg"
            alt="close"
            onClick={hideCart}
          />
        </h2>
        <div className="items flex">
          {cartItems.map(({ name, price, img }, i) => (
            <div
              key={i}
              className="cart-item d-flex align-center justify-center mb-20"
            >
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="cart-item-img"
              ></div>
              <div className="description">
                <p>{name}</p>
                <b>{price} руб.</b>
              </div>
              <img
                className="deleted-btn"
                alt="remove"
                src="/img/icons/delete.svg"
                width="32"
                height="32"
              />
            </div>
          ))}
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
