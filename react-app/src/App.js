import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Adminpanel from './components/Adminpanel';
import axios from 'axios';

function App() {
  //login testing 
  const adminUser = {
    email: "admin@admin.com",
    password:"admin123"
  }

  const [user,setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {

    // if (details.email === adminUser.email && details.password === adminUser.password){
    //   console.log("Logged in");
    //   setUser({
    //     email: details.email
    //   });
    // }else{
    //   console.log("Details don't not match");
    //   //setError("Details do not match");
    //   alert('Credentials do not match')
    // }
    let data = new FormData();
    data.append('email', details.email);
    data.append('password', details.password);
 
try{
  axios.post(`http://127.0.0.1:8000/api/admin/login`, {email: details.email, password: details.password}
  ).then(res => {
    console.log(res);
    //set user email and direct him/her to admins panel
    setUser({
          email: details.email
        });
  });

}catch(err){
  setError("Details do not match");
alert('anauthorized user!')
}
  
  }

  const Logout = () => {
    console.log("Logout");
    setUser({name:"", email:""});
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        // <div className='welcome'>
        <div className='welcome'>
          
          {/* load admin panel component */}
          <Adminpanel></Adminpanel>
          {/* <button onClick={Logout}>Logout</button> */}
          </div>
      ) : (
       
         <LoginForm Login={Login} error={error}></LoginForm>
        
    
      )}
    </div>
  );
}

export default App;
