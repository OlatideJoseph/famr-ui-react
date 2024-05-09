import * as React from 'react'
import './navbar.css'

const NavBar = () => {
	return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
        <div className="container ml-5">
            <span id="lli"><img src="" alt="user-profile" className="bio-img" id="bio-img"/></span>
            <a className="navbar-brand text-info" href="#">\recommender</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link sp auth" href="/match-course/" style={{display: "none"}}>Match</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link usp" href="/login/">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link auth" href="/profile/" style={{display: "none"}}>Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link auth" href="/offered-courses/" style={{display: "none"}}>Courses</a>
                    </li>
                    <li className="nav-item" tabIndex="-1">
                        <button type="button" id="nav-bnt" className="auth nav-item  btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display: "none"}}>
                          Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
	)
}

export default NavBar