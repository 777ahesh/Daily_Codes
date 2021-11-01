import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
 const Navbar = (props) => {
  return (
  <>
<nav href="#Home" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div href="#Home" className="container-fluid">
    <a href="#Home" className="navbar-brand" >Navbar</a>
    <button href="#Home" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span href="#Home" className="navbar-toggler-icon"></span>
    </button>
    <div href="#Home" className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul href="#Home" className="navbar-nav me-auto mb-2 mb-lg-0">
        <li href="#Home" className="nav-item">
          <a href="#Home" className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li href="#Home" className="nav-item">
          <a href="#Home" className="nav-link" >Link</a>
        </li>
        <li href="#Home" className="nav-item dropdown">
          <a href="#Home" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul href="#Home" className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a href="#Home" className="dropdown-item" >Action</a></li>
            <li><a href="#Home" className="dropdown-item" >Another action</a></li>
            <li><hr href="#Home" className="dropdown-divider"/></li>
            <li><a href="#Home" className="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
        <li href="#Home" className="nav-item">
          <a href="#Home" className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className={`form-check form-switch mx-3  text-${props.mode === 'light'?'dark':'light' }`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" forhtml="flexSwitchCheckDefault">Dark Mode</label>
      </div>
      <form href="#Home" className="d-flex">
        <input href="#Home" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button href="#Home" className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
export default Navbar;