import cx from 'classnames';
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import Footer from './Footer';
import Link from 'next/link'

function ShareItem ()  {
    return(
        <div>
          <Head><title>Share Item</title></Head>
          <Navbar/>
        
        <section>
          <div className="share">
            <div className="register1">
                <div className="col-1">
                      <form id='form' className='flex flex-col' >
                      <h2>Fill in the details</h2>    
                          <input type="text" className='d' placeholder='Brand' />
                          <input type="text" className='d' placeholder='Model' />
                          <input type="text" className='d' placeholder='Title' />
                          <input type="text" className='d' placeholder='Description' />
                          <hr></hr>
                          <label>Add photo</label> 
              <div>
                      <input  type="file"></input>
              </div>
              <hr></hr>
                  <label>Contact details</label>
              <hr></hr>
                          <input type="text" className='d' placeholder='Name' />
                          <input type="text" className='d' placeholder='Email' />
                          <input type="text" className='d' placeholder='Phone Number' />
                          
                          <button className='btn'>Share Item</button>
                      </form>
                  </div>
          </div>
        </div>
    </section>
        <Footer/>
        </div>
    )
}

export default ShareItem;