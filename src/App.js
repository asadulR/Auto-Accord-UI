import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/Signup/Signup';
import ManageInventories from './Components/Pages/ManageInventories/ManageInventories';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='manageinventories' element={<ManageInventories/>}></Route>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
