import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css"
export default function Menu() {



    return (
        <div className='navbar'>
            <div className='menu-container'>
                <ul className='nav-links'>
                    <li>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/cvpage' className='nav-link'>
                            CvPage
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' className='nav-link'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/funny' className='nav-link'>
                            Funny
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};