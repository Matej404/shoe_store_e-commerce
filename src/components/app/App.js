import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import ProductDetails from '../ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetails />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
