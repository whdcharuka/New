import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-a'>
        <p className='footer-a-heading'>
          dnjkesbfuye ferugfeui fbeurf bchsdbufye ncndiuhfw ncsiaudb cnsdbidu.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link
              href="/"
            >
              HOME
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              href="/Components/Services"
            >
              SERVICES
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              href="/Components/Conditions"
            >
              CONDITIONS
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
             href="/Components/contactus"
            >
              CONTACT
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              href="/Components/about-us"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
          <SocialIcon  class='social-icon-link' url="https://facebook.com" />
          &nbsp;&nbsp;
          <SocialIcon url="https://instagram.com" />
          &nbsp;&nbsp;
          <SocialIcon url="https://twitter.com" />
          &nbsp;&nbsp;
          <SocialIcon url="https://linkedin.com" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
