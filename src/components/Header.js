import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { isUserLoggedIn } from '../atoms'

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Logo />
          </div>
          <div id="search-bar" className="col-md-8 text-center" >
            {isUserLoggedIn === true ? <SearchBar /> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
