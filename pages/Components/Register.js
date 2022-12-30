import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Register(){
    return(
        <div>
            <Head><title>Register</title></Head>
            <Navbar/>
    <section>
        <section>
          <div className="register">
              <div className="col-1">
                  <h2>Get Started with MAKER</h2>
                  <span>Getting started is easy</span>

                  <form id='form' className='flex flex-col' >
                      <input type="text" className='d'  placeholder='Full Name' />
                      <input type="text" className='d'  placeholder='Email' />
                      <input type="text" className='d'  placeholder='Password' />
                      <input type="text" className='d'  placeholder='Confirm Password' />
                      
                      <button className='btn'>Create Account</button>
                  </form>
            </div>
              <div className="col-2">
                  <img src='/images/istock.jpg' />
              </div>
          </div>
        </section>
    </section>
    <Footer/>
   </div>
    )
}