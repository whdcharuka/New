import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Reset(){
    return(
        <div>
            <Head><title>Reset</title></Head>
            <Navbar/>
            <section>
            <div className="register">
                <div className="col-1">
                    <h2>Reset Password</h2>
                      <span>Enter your email here!</span>

                      <form id='form' className='flex flex-col' >
                          <input type="text" className='d' placeholder='Email' />
                          
                          <button className='btn'>Reset Password</button>
                      </form>

                  </div>
                        <div className="col-2">
                            <img src='/images/6333057.jpg' />
                        </div>
              </div>
              <div className="register">
                <div className="col-3">
                      <span>We will sent a link to reset your password! </span><br></br>
                      <span>Please check your mail inbox.</span>
                  </div>
              </div>
          </section>
          <Footer/>
        </div>
    )
}