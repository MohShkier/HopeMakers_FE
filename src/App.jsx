  import './App.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import SignUpPage from './components/signup-page/signupPage';
  import NavBar from './components/navbar/NavBar';
import AccountPages from './components/AccountPages/AccountPages';
import LoginPage from './components/Login-Page/LoginPage'
import BottomBar from './components/BottomBar/BottomBar';
  function App() {
    return (
      <>
      <NavBar/>
      <AccountPages/>
      <BottomBar/>
      </>
    );
  }

  export default App;
