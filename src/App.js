import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searchpage from './Searchpage';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path='search' element={<Searchpage />}>
          </Route>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
      </div>
      

           

  )
}

export default App;
