import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="line"/>
      <div className="nav__block container">
        <nav className='nav__panel'>
          <ul className='types__list'>
            <li className='active'><a href="#">Все</a></li>
            <li><a href="#">Мясные</a></li>
            <li><a href="#">Вегетарианская</a></li>
            <li><a href="#">Гриль</a></li>
            <li><a href="#">Острые</a></li>
            <li><a href="#">Закрытые</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
