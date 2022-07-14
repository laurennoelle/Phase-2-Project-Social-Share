import React from 'react'
import LoginForm from './LoginForm'

function Login(){
    return(
      <>
        <div id="main-container-login">
          <div className="container" >
            <div className="row">
              <div className="col-md-6" id="login-page-left">
                <img id="hero-logo" src={require("../images/social-share-logo-trans-wht.png")} />
              </div>
              <div className="col-md-6" id="login-page-right">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </>      
    )
}

export default Login