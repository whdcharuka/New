import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href="/" className='navbar-logo' >
            Symphony
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                href="/"
                className='nav-links' 
                >
                Discover
              </Link>
            </li>
            <li className='nav-item'>
              <Link
               href="/Components/Login"
                className='nav-links'
                
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href="/Components/contactus"
                className='nav-links'
                
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href="/Components/about-us"
                className='nav-links'
               
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                href="/Components/share-item"
                className='nav-links' 
                >
                Share Your Item
              </Link>
            </li>
          </ul>
          <li>
                                    
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;