import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Form() {

   
    
  return (
    <section>
        <section>
            <Head><title>Login</title></Head>
            <Navbar/>
            <div className="register">
                <div className="col-1">
                    <h2>Welcome Back</h2>
                      <span>Login to your account</span>

                      <form id='form' className='flex flex-col' >
                          <input type="text" className='d' placeholder='Email' />
                          <input type="text" className='d' placeholder='Password' />
                          
                          <button className='btn'>Login</button>
                          <span>Forgot Password?<Link href="/Components/Reset" className='abc'>Reset Password </Link>  </span>
                      </form>

                  </div>
                        <div className="col-2">
                            <Image src='/images/istockphoto.jpg' width={350} height={300} />
                        </div>
              </div>
          </section>

          <div className="register">
                <div className="col-3">
                      <span>Don't have an account?<Link href="/Components/Register" className='abc'>Register </Link> </span>
                  </div>
              </div>
              <Footer/>
        </section>
  )
}