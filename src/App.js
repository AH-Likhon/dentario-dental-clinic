import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Doctor from './Pages/Doctor/Doctor';
import Services from './Pages/Home/Services/Services';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute>



            <PrivateRoute path="/booking/:details">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
