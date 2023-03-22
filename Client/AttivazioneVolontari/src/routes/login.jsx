import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import logoPC from '../assets/logo.png'
import '../css/login.css'
import TextField from '@mui/material/TextField'


function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});

  return (

    <div style={{background: "white", height: "100vh", width: "100vw"}} className="Login">

      <div className="contImmagine">
        <img className="logoPC" src={logoPC}/>
      </div>

      <fieldset className = "form">
        <legend>Login</legend>
        <input className="input" type="text" name='nomeUtente' placeholder='username'/>
        <input className="input" type="password" name='password' placeholder='password'/>
      </fieldset>

      <div>
        <form action="./home">
          <button type="submit" className='bottone'>
            ACCEDI
          </button>  
        </form> 
      </div>


    </div>

    /*<div className="Login">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>*/



  )
}

export default Login
