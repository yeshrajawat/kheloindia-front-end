import './App.scss';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import Error from './pages/ErrorPage/Error';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import Pledge from './pages/Pledge/Pledge';
import About from './pages/AboutPage/About';
import Tender from './pages/Tender/Tender';
import Footer from './components/Footer/Footer';
import SignUpScreen from './pages/SignUpScreen/SignUpScreen';
import Welcome from './pages/WelcomePage/Welcome';

function App() {
  return (
    <div className="App">

     <Banner/>
     

    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/pledge' element={<Pledge/>} />
        <Route path='/aboutKL' element={<About/>} />
        <Route path='/tenders' element={<Tender/>} />
        <Route path='/signup' element={<SignUpScreen/>} />
        <Route path='/welcome' element={<Welcome/> }/>
        <Route path='*' element={<Error/>} />
        
      </Routes>
      <Footer/>
    </Router>





    </div>
  );
}

export default App;
