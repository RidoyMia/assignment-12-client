import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Signup from './components/Pages/Signup/Signup';
import { Container } from 'react-bootstrap';
import Order from './Shared/Order/Order';
import Login from './components/Pages/Login/Login';
import Required from './Shared/Required/Required';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Users from './Shared/Users/Users';
import Profile from './Shared/Profile/Profile';
import Footer from './components/Pages/Home/Footer/Footer';

function App() {
  return (
    <Container>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
           <Route path='users' element={<Users></Users>}></Route>
           <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='/order/:id' element={
          <Required>
            <Order></Order>
          </Required>
        }></Route>
      </Routes>
      <Footer></Footer>
    </Container>
  );
}

export default App;
