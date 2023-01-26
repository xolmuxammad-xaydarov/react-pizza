import './App.scss';
import Categories from './components/categories/Categories';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="line"/>
      <Categories/>
    </div>
  );
}

export default App;
