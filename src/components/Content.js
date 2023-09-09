import Card from './Card';

const Content = ({ sneakers }) => {
  return (
    <div className="content">
      <div className=" mb-40 d-flex align-center justify-between">
        <h1>Все кроссовки</h1>
        <div className="search-block d-flex align-center">
          <img src="/img/icons/search.svg" alt="search" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className="sneakers  d-flex">
        {sneakers.map((obj, i) => (
          <Card key={i} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Content;
