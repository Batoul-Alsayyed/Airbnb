import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Adminpanel from './components/Adminpanel';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import SubNavBar from './components/SubNavBar';
import UserNavBar from './components/UserNavBar';
import UserPage from './components/UserPage'
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/user' element={<Mainpage/>}></Route>
        <Route path='/admin' element={<Adminpanel/>}></Route>
        <Route path='/navbar' element={<UserNavBar/>}></Route>
        <Route path='/subnavbar' element={<SubNavBar/>}></Route>
        <Route path='/userpage' element={<UserPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;
