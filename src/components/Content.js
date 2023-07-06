const Content = () => {
  return (
    <div className="content p-45">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex align-center">
          <img src="/img/icons/search.svg" alt="search" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex">
        <div className="card ">
          <div className="favorite">
            <img src="/img/icons/liked.svg" alt="unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/1.jpg"
            alt="sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <div className="button">
              <img src="/img/icons/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card ">
          <div className="favorite">
            <img src="/img/icons/unliked.svg" alt="unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/2.jpg"
            alt="sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <div className="button">
              <img src="/img/icons/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card ">
          <div className="favorite">
            <img src="/img/icons/unliked.svg" alt="unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/3.jpg"
            alt="sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <div className="button">
              <img src="/img/icons/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="card ">
          <div className="favorite">
            <img src="/img/icons/unliked.svg" alt="unliked" />
          </div>
          <img
            width={133}
            height={112}
            src="/img/sneakers/4.jpg"
            alt="sneakers"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <div className="button">
              <img src="/img/icons/plus.svg" alt="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
