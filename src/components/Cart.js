const Cart = ({ removeFromCart, hideCart, cartItems = [] }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains('cart-overlay')) {
          hideCart();
        }
      }}
      className="cart-overlay"
    >
      <div className="cart-body d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">Корзина</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="items flex">
              {cartItems.map(({ id, name, price, img }, i) => (
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
                    onClick={() => {
                      removeFromCart(id);
                    }}
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
          </>
        ) : (
          <div
            style={{
              marginTop: '279px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              style={{ marginBottom: '21px' }}
              src="/img/icons/empty-cart.svg"
              alt="cart"
            ></img>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '270px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  marginBottom: '9px',
                }}
              >
                Корзина пустая
              </p>
              <p
                style={{
                  opacity: '0.4',
                  marginBottom: '40px',
                  fontSize: '16px',
                }}
              >
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <button className="green-button click-to-back" onClick={hideCart}>
              <img src="/img/icons/left-arrow.svg" alt="left-arrow"></img>
              <p style={{ marginLeft: '20px' }}>Вернуться назад</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
