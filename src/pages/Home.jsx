import Card from '../components/Card';

function Home({
  sneakers,
  searchValue,
  addToCart,
  addToFav,
  onChangeSearchValue,
  setSearchValue,
}) {
  return (
    <div className="content">
      <div className=" mb-40 d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по заросу: ${searchValue}` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex align-center">
          <img src="/img/icons/search.svg" alt="search" />
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue('');
              }}
              width={17}
              height={17}
              src="/img/icons/delete.svg"
              alt="clear"
            />
          )}
        </div>
      </div>
      <div className="sneakers d-flex">
        {sneakers
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, i) => (
            <Card key={i} addToCart={addToCart} addToFav={addToFav} {...obj} />
          ))}
      </div>
    </div>
  );
}

export default Home;
