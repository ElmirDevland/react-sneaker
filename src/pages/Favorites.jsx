import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home({ favItems, addToFav }) {
  return (
    <div className="content">
      {favItems.length > 0 ? (
        <>
          <div className="content-title">
            <Link to={'/'}>
              <button className="button">
                <img src="/img/icons/back.svg" alt="back" />
              </button>
            </Link>
            <h1>Мои закладки</h1>
          </div>
          <div className="sneakers d-flex">
            {favItems.map((obj, i) => (
              <Card key={i} {...obj} addToFav={addToFav} favorited={true} />
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            marginTop: '252px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            style={{ marginBottom: '24px' }}
            src="/img/icons/sad.svg"
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
                marginBottom: '11px',
              }}
            >
              Закладок нет :(
            </p>
            <p
              style={{
                opacity: '0.4',
                marginBottom: '70px',
                fontSize: '16px',
                width: '285px',
              }}
            >
              Вы ничего не добавляли в закладки
            </p>
          </div>
          <Link to={'/'}>
            <button className="green-button click-to-back">
              <img src="/img/icons/left-arrow.svg" alt="left-arrow"></img>
              <p style={{ marginLeft: '20px' }}>Вернуться назад</p>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
