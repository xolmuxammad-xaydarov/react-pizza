import Categories from './components/categories/Categories';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="padding">
      <div className="App">
        <Header />
        <div className="line" />
        <Categories />
      </div>
    </div>
  );
}

export default App;
