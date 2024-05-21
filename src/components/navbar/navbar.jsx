import * as React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = ({ auth=false, logOut=null }) => {
  const path = window.location.pathname
  const matchedPath = (vpath) => (path == vpath)
	return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <div className="container ml-5">
        <span id="lli" style={{display:"none"}}><img src="" alt="user-profile" className="bio-img" id="bio-img"/></span>
        <Link className="navbar-brand text-info" to='/'>
          \recommender
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${matchedPath('/')? 'active': ''}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${matchedPath('/offered-courses/')? 'active': ''}`}
                aria-current="page"
                to="/offered-courses/"
              >
                Courses
              </Link>
            </li>
            {
              auth ?(
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${matchedPath('/match-course/')? 'active': ''}`}
                      aria-current="page"
                      to="/match-course/"
                    >
                      Match
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${matchedPath('/profile/')? 'active': ''}`}
                      aria-current="page"
                      to="/profile/"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item" tabIndex="-1">
                    <button type="button" id="nav-bnt" className="btn btn-primary" onClick={logOut} data-bs-toggle="modal">
                      Logout
                    </button>
                  </li>
                </>
              ):(
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${matchedPath('/sign-in/')? 'active': ''}`}
                      aria-current="page"
                      to="/sign-in/"
                    >
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${matchedPath('/sign-up/')? 'active': ''}`}
                      aria-current="page"
                      to="/sign-up/"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )
          }
          </ul>
        </div>
      </div>
    </nav>
	)
}

export default NavBar