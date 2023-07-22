import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='movie/:id' element={ <Movie/> }/>
          <Route path='movies/:type' element={ <MovieList/> }/>
          <Route path='/*' element={ <h1>error</h1> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;