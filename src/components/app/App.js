import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin } from '../../store/auth/auth.reducers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';

function App() {
  const dispatch = useDispatch();
  const { showLogin, isAuthenticated } = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(toggleLogin());
  }
  

  return (
    <div className="App">
      <Router>
        <Header onLoginClick={handleLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated && <Route path="/cart" element={<Cart />} />}
        </Routes>
      </Router>
      { showLogin && <Login /> }
    </div>
  );
}

export default App;
