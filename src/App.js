import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Tutorial from './components/Tutorial';
import Quiz from './components/Quiz';
import About from './components/About';
import AddImages from './components/AddImages';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-images' element={<AddImages />} />
      </Routes>
    </div>
  );
}

export default App;
