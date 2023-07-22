import Cart from './components/Cart';
import Header from './components/Header';
import Content from './components/Content';

const sneakers = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    img: '/img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999',
    img: '/img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499',
    img: '/img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    img: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <Content sneakers={sneakers} />
    </div>
  );
}

export default App;
