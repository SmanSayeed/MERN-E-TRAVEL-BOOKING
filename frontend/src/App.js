
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route,  Redirect,
  useHistory,
  useLocation } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import NoPageFound from './components/NoPageFound/NoPageFound';
import initializeAuthentication from './Firebase/firebase.initialize';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import ServiceDetails from './components/Services/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import Review from './components/Review/Review';
import useAuth from './hooks/useAuth';
import useFirebase from './hooks/useFirebase';
import ServiceCreate from './components/Services/ServiceCreate/ServiceCreate';
import axios from 'axios';
import AllBookings from './components/Bookings/AllBookings/AllBookings';
import MyBookings from './components/Bookings/MyBookings/MyBookings';

function App() {

axios.defaults.baseURL = 'https://arcane-waters-56813.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:5000/';

  const {user} = useFirebase();
  return (
    <div className="App">

  <AuthProvider>

    <Router>

        <Header></Header>

        <Switch>

          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/services">
              <Services></Services>
          </Route>

          <Route path="/signin">
            {user.email ? <Redirect to="/"/> :   <Signin></Signin>}
            
          </Route>
        {/*          
          <Route path="/signup">
              <Signup></Signup>
          </Route> */}

        
          <PrivateRoute path="/details/:index">
            <ServiceDetails></ServiceDetails>   
          </PrivateRoute> 
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>   
          </PrivateRoute> 
          <PrivateRoute path="/review">
            <Review></Review>   
          </PrivateRoute> 

          <PrivateRoute path="/mybookings">
            <MyBookings></MyBookings>   
          </PrivateRoute> 


          <PrivateRoute path="/allbookings">
            <AllBookings></AllBookings>   
          </PrivateRoute>   

          <PrivateRoute path="/addservice">
            <ServiceCreate></ServiceCreate>   
          </PrivateRoute> 
          
            
          {/* </Route> */}

          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="*">
            <NoPageFound></NoPageFound>
          </Route>



        </Switch>

        <Footer></Footer>
    </Router>
  </AuthProvider>

    </div>
  );
}

export default App;
