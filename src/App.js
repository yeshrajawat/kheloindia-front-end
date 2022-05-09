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
import { useSelector } from 'react-redux';
import DashBoardHome from './pages/DashBoard/DashBoardHome/DashBoardHome';
import List from './pages/DashBoard/List/List';
import New from './pages/DashBoard/new/New';
import Single from './pages/DashBoard/Single/Single';
import {userInputs, productInputs} from './pages/DashBoard/formSource';
function App() {

const isLoggedIn = useSelector(state => state.isLoggedIn);
console.log(isLoggedIn);

  return (
    <div className="App">

     
     {!isLoggedIn && (<Banner/>) }
     

    <Router path="/">
    
    {!isLoggedIn && (<Navbar/>) }
      <Routes>
      
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/pledge' element={<Pledge/>} />
        <Route path='/aboutKL' element={<About/>} />
        <Route path='/tenders' element={<Tender/>} />
        <Route path='/signup' element={<SignUpScreen/>} />
        <Route path='/welcome' element={<Welcome/> }/>
        
       {isLoggedIn && (
         <Route path="/user">

         <Route index element= { <DashBoardHome/> } />
         <Route path="user/">
             <Route path="all" element= { <List/> } />
             <Route path=":userId" element= { <Single/> } />
             <Route path="new" element= { <New inputs={userInputs} title="Add New User"/> } />
           </Route> 
         
           <Route path="product">
             <Route index element= { <List/> } />
             <Route path=":productId" element= { <Single/> } />
             <Route path="new" element= { <New  inputs={productInputs}title="Add New User"/> } />
           </Route> 
       </Route>
       )} 

          <Route path='*' element={<Error/>} />

      </Routes>
    {!isLoggedIn && (<Footer/>)}        
      

    </Router>







    </div>
  );
}

export default App;
