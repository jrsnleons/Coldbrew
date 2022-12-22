import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';

import '../css/login.css'

function Login() {

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setloginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  

  const login = () => {
    Axios.post("http://localhost:3002/login", {
      user_email: userEmail,
      user_password: password,
    }).then((response) => {
  
      console.log(response.data)
      if(response.data.message){
        setloginStatus(response.data.message);
      }else{
        setloginStatus(response.data[0].userEmail);
      }
      console.log(response.data);
    });
  };


  useEffect(()=>{
    Axios.get("http://localhost:3002/login").then((response) =>{
      console.log(response);
      if(response.data.loggedIn === true){
        setloginStatus('Success');
        navigate('/home');
      }
    })
  }, [navigate])

  return (
    <div className="loginPage">
      <Header/>
      <div className="loginBody">
      <form>
        <h1>Login</h1>
        <h1>{loginStatus}</h1>
        <div className="longinput">
          <label>Email</label>
          <div className="reg">
            <input type="email" placeholder='Email...'
              onChange={(e)=>{
                setUserEmail(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="longinput">
          <label>Password</label>
          <div className="reg">
          <input type="password" placeholder='Password... '
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
          />
          </div>
        </div>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        <button onClick={login}>Login</button>
      </form>

      </div>
      <Footer/>
    </div>
  )
}

export default Login;