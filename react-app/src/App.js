import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Adminpanel from './components/Adminpanel';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';

import UserNavBar from './components/UserNavBar';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/user' element={<Mainpage/>}></Route>
        <Route path='/admin' element={<Adminpanel/>}></Route>
        <Route path='/navbar' element={<UserNavBar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;
