import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Link, useNavigate } from "react-router-dom";
import { database, isUserLoggedIn, currentUserObject, currentUser, loginUserUsername, loginUserPassword } from '../atoms';


function LoginForm() {
  const [databaseContents, setDatabaseContents] = useRecoilState(database);
  const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);
  const [theUserObject, setTheUserObject] = useRecoilState(currentUserObject);
  const [theUser, setTheUser] = useRecoilState(currentUser);
  const [theUserUsername, setTheUserUsername] = useRecoilState(loginUserUsername);
  const [theUserPassword, setTheUserPassword] = useRecoilState(loginUserPassword);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((r) => r.json())
      .then((data) => setDatabaseContents(data));
  }, [])

  function logIn(e){
    e.preventDefault();
    console.log(databaseContents)
    const checkLogIn = databaseContents.filter((user) => user.username.toLowerCase() === theUserUsername.toLowerCase() && user.password === theUserPassword)
    if(checkLogIn.length > 0){
      setTheUser(checkLogIn[0].username);
      setTheUserObject(checkLogIn[0]);
      setLoggedIn(true);
      navigate('/ss');
    }
    else{
      alert("Username or Password incorrect");
    }
  }

  return (
    <div id="login-form">
      <div id="login-form-header">
        <h2>Login</h2>
      </div>
      <form onSubmit={logIn}>
        <div className="form-username">
          <label htmlFor="username">Username</label> 
          <input id="username" name="username" type="text" required="required" className="form-control" onChange={(e) => setTheUserUsername(e.target.value)} value={theUserUsername} />
        </div>
        <div className="form-password">
          <label htmlFor="password">Password</label> 
          <div className="input-group">
            <input id="password" name="password" type="text" className="form-control" onChange={(e) => setTheUserPassword(e.target.value)} value={theUserPassword} /> 
            <div className="input-group-append">
              <div className="input-group-text">
                <i className="fa fa-unlock-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="form-checkbox">
          <div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="rabbit" checked="checked" /> 
              <label htmlFor="checkbox_0" className="custom-control-label">Keep me logged in</label>
            </div>
          </div>
        </div> 
        <div className="form-submit-button">
          <button name="submit" type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <div id="bottom-of-login-form">
        <div id="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        <div id="no-account">
          <p>Don't have an account?</p>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm