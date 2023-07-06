import Header from './Header';
import Content from './Content';
import Cart from './Cart';

const Wrapper = () => {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <Content />
    </div>
  );
};

export default Wrapper;
