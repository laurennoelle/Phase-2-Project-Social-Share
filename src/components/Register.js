import React from 'react';
import RegisterForm from './RegisterForm';
import Header from './Header'

function Register() {

  return (
    <>
      <Header />
      <div id="main-container-register">
        <div className="container" >
          <div className="row">
            <div className="col-md-12">
                <RegisterForm />
            </div>
          </div>
        </div>
      </div>   
    </>  
  )
}

export default Register