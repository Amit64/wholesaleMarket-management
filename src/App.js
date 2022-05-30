import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import MyOrders from './components/DashBoard/MyOrders';
import MyProfile from './components/DashBoard/MyProfile';
import Reviews from './components/DashBoard/Reviews';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Home/>}></Route>
      <Route path="/Blog" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

      <Route path="dashboard" element={<RequireAuth>
        <DashBoard></DashBoard>
      </RequireAuth>}>
      <Route index  element={<MyOrders></MyOrders>}></Route>
        <Route path="review" element={<Reviews></Reviews>}></Route>
        <Route path="profile" element={<MyProfile></MyProfile>}></Route>


      </Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
