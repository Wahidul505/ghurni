import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Forms/Login/Login';
import Register from './Pages/Forms/Register/Register';
import Home from './Pages/Home/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='pt-36 px-10'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/booking' element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
