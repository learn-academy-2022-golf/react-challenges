import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Favorites />
      <Footer/>
   </>   
   
  );
}

export default App;
