import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate } from "react-router-dom"

function LoginForm() {
  let navigate = useNavigate();

  const [user,setUser] = useState({name:"", email:""});
  //const [error, setError] = useState("");

  const Logout = () => {
    console.log("Logout");
    setUser({name:"", email:""});
  }
  const [details, setDetails] = useState({name:"", email:"", password:""});
  
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }
  const Login = details => {
    axios.post(`http://127.0.0.1:8000/api/admin/login`, {email: details.email, password: details.password}
    ).then(res => {
      console.log(res);
      //set user email and direct him/her to admins panel
      setUser({
            email: details.email
          });
          //navigate to admin panel 
          navigate('/admin')
    });
  
    
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* {(error != "") ? (<div className='error'>{error}</div>): ""} */}

            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" id="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN" className='welcomebtn'></input>
        </div>
    </form>
  )
}

export default LoginForm
