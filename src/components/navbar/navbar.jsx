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
        <a className="navbar-brand text-info" href='/'>
          \recommender
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${matchedPath('/')? 'active': ''}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${matchedPath('/offered-courses/')? 'active': ''}`}
                aria-current="page"
                href="/offered-courses/"
              >
                Courses
              </a>
            </li>
            {
              auth ?(
                <>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${matchedPath('/match-course/')? 'active': ''}`}
                      aria-current="page"
                      href="/match-course/"
                    >
                      Match
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${matchedPath('/profile/')? 'active': ''}`}
                      aria-current="page"
                      href="/profile/"
                    >
                      Profile
                    </a>
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
                    <a
                      className={`nav-link ${matchedPath('/sign-in/')? 'active': ''}`}
                      aria-current="page"
                      href="/sign-in/"
                    >
                      Log In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${matchedPath('/sign-up/')? 'active': ''}`}
                      aria-current="page"
                      href="/sign-up/"
                    >
                      Sign Up
                    </a>
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