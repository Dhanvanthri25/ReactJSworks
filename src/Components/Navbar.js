import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary vw-100 fixed-top">
                <div class="container-fluid">
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' className="nav-link">Myportfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Helloworld' className="nav-link active" aria-current="page">Hello World</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Superleague' className="nav-link">Superover League</Link>
                            </li>
                            <li>
                                <Link to='/Socialbuttons' className="nav-link">SocialButtons</Link>
                            </li>
                            <li>
                                <Link to='/Notifications' className="nav-link">Notifications</Link>
                            </li>
                            <li>
                                <Link to='/Login' className="nav-link">Login</Link>

                            </li>
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    View More
                                </a>
                                <ul class="dropdown-menu">
                                <li>
                                <Link to='/Technology' className="nav-link">Technology Card</Link>
                            </li>
                            <li>
                                <Link to='/Hooks' className="nav-link">Hooks</Link>
                            </li>
                            <li>
                                <Link to='/FruitsCounter' className="nav-link">FruitCounter</Link>
                            </li>
                            <li>
                                <Link to='/Feedback' className="nav-link">Feedback</Link>
                            </li>
                            <li>
                                <Link to='/Datefunction' className="nav-link">Datefunction</Link>
                            </li>
                            <li>
                                <Link to='/Shoesjson' className="nav-link">Shoesjson</Link>
                            </li>
                            <li>
                                <Link to='/Fakestore' className="nav-link">Fakestore</Link>
                            </li>
                            <li>
                                <Link to='/Form' className="nav-link">Node Form </Link>
                            </li>
                            <li>
                                <Link to='/admin' className="nav-link">Admin Table </Link>
                            </li>
                            <li>
                                <Link to='/UpdateData' className="nav-link">UpdateData  </Link>
                            </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         </>
    );
}
