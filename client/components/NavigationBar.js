import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">Red Dice</NavLink>
        </div>
        <div className="collapse navbar-collapse">

            <ul className="nav navbar-nav navbar-right">
              <li><NavLink activeClassName="active" to="/signup">Sign Up</NavLink></li>
              <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
            </ul>
        </div>
      </div>
    </nav>


  );
}
