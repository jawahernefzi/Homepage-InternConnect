import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Offers from '../pages/Offers'
import Company from '../pages/Companies'
import OffersDetails from '../pages/OffersDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Routers = () => {
  return (
        <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home/>}/>
        <Route path='Offers' element={<Offers/>}/>
        <Route path='Offers/:id' element={<OffersDetails/>}/>
        <Route path='company' element={<Company/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>

    </Routes>
  );
};

export default Routers;
