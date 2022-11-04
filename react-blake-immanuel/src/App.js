import logo from './logo.svg';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
    <Header />
    <Profile />
    <Favorites />
    <Footer />
    </>
  );
}

export default App;
