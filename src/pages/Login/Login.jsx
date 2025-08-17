import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import { Link } from 'react-router-dom'

const Login = () => {

  const [signState, setSignState] = useState("Sign In") 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (event) => {
    event.preventDefault();

    if (signState === "Sign In") {
      await login(email, password)
    } else {
      signup(name, email, password)
    }
  }

  return (
    <div className='login'>
      <Link to={'/'}>
          <img src={logo} className='login-logo' alt="" />
      </Link>
     
      <div className="login-form">

        <h1 className=""> { signState } </h1>

        <form>

          { signState == "Sign Up" ?
            <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder='Your name' /> : <></>
          }
          
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Your email' />
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Yoi=ur password' />
          
          <button className='login-btn' onClick={user_auth} type='submit'> { signState } </button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          { signState == "Sign In" ? 
            <p>New to Netflix? <span onClick={() => { setSignState('Sign Up') }}>Sign Up Now</span> </p>
            : <p>Already have account? <span onClick={() => { setSignState('Sign In') }}>Sign In Now</span> </p>
          }
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Login
