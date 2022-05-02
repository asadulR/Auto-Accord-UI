import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/Pages/AddItem/AddItem';
import Blog from './Components/Pages/Blog/Blog';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/Signup/Signup';
import ManageInventories from './Components/Pages/ManageInventories/ManageInventories';
import MyItems from './Components/Pages/MyItems/MyItems';
import Page404 from './Components/Pages/NotFound/Page404';
import RequireAuth from './Components/Pages/Shared/Auth/RequireAuth';
import UpdateInventory from './Components/Pages/UpdateInventory/UpdateInventory';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <UpdateInventory />
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={<ManageInventories />}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
