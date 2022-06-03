import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import AddProduct from './components/DashBoard/AddProduct';
import DashBoard from './components/DashBoard/DashBoard';
import MakeAdmin from './components/DashBoard/MakeAdmin';
import ManageOrders from './components/DashBoard/ManageOrders';
import ManageProduct from './components/DashBoard/ManageProduct';
import MyOrders from './components/DashBoard/MyOrders';
import MyProfile from './components/DashBoard/MyProfile';
import Reviews from './components/DashBoard/Reviews';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAdmin from './components/Login/RequireAdmin';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import AllProducts from './components/Products/AllProducts';
import Purchchase from './components/Purchchase/Purchchase';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import PageNotFound from './components/Shared/PageNotFound/PageNotFound';

function App() {
  return (
    
    <div className='lg:max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<AllProducts/>}></Route>
      <Route path="/Blog" element={<Blogs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path='/portfolio' element={<MyPortfolio/>}></Route>

      <Route path="/dashboard" element={<RequireAuth>
        <DashBoard></DashBoard>
      </RequireAuth>}>
      <Route index  element={<MyProfile></MyProfile>}></Route>
        <Route path="review" element={<Reviews></Reviews>}></Route>
        <Route path="myorder" element={<MyOrders></MyOrders>}></Route>

        <Route path="manageorders" element={<RequireAdmin>
          <ManageOrders/>
        </RequireAdmin>}></Route>
        <Route path="manageproduct" element={<RequireAdmin>
          <ManageProduct/>
        </RequireAdmin>}></Route>
        <Route path="makeadmin" element={<RequireAdmin>
          <MakeAdmin/>
        </RequireAdmin>}></Route>
        <Route path="addproduct" element={<RequireAdmin>
          <AddProduct/>
        </RequireAdmin>}></Route>


      </Route>
      <Route path='/purchase/:id' element={<RequireAuth>
        <Purchchase/>
      </RequireAuth>}></Route>

      <Route path='*' element={<PageNotFound/>}></Route>

      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
