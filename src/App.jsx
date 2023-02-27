import { Routes, Route } from 'react-router-dom'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="padding">
      <div className="App">
        <Header />
        <div className="line" />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Card />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
