import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin } from '../../store/auth/auth.reducers';

function App() {
  const dispatch = useDispatch();
  const { showLogin } = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(toggleLogin());
  }
  

  return (
    <div className="App">
      <Header onLoginClick={handleLogin} />
      <Home /> 
      { showLogin && <Login /> }
    </div>
  );
}

export default App;
