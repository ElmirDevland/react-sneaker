import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({
  name,
  price,
  img,
  id,
  addToCart,
  addToFav,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    addToCart({ name, price, img, id });
  };

  const onAddFavorites = (e) => {
    setIsFavorite(!isFavorite);
    addToFav({ name, price, img, id });
  };

  return (
    <div className={styles.card}>
      <button onClick={onAddFavorites} className={styles.favorite}>
        <img
          src={`/img/icons/${isFavorite ? 'liked.svg' : 'unliked.png'}`}
          alt="fav"
        />
      </button>
      <img width={133} height={112} src={img} alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button onClick={onClickPlus} className="button">
          <img
            src={`/img/icons/${isAdded ? 'checked' : 'plus'}.svg`}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
