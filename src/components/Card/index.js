import styles from './Card.module.scss';

const Card = ({ name, price, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/icons/liked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={img} alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div className="button">
          <img src="/img/icons/plus.svg" alt="plus" />
        </div>
      </div>
    </div>
  );
};

export default Card;
