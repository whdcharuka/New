import cx from 'classnames';
import styles from '/styles/Contactus.module.css'
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import Footer from './Footer';

export default Contactus;

function Contactus() {
  return (
    <div>
      <Head><title>Contact-Us</title></Head>
      <Navbar/>
      <br/>
    <section className={styles.bg}>
      
      <h1 className={styles.how4}>Contact Us</h1>
      <section>
          <div >
            <img src='/images/contactus.png' />
          </div>
        
          <div className='wcontainer grid7'>
            <div className={styles.form} >
              <form id='form' className={styles.formd}>   
                <h4 className={styles.topic}>Call or email us</h4>
                  <span className='emailus'>Please get in touch with us and we will<br></br>
                   get back to you as soon as possible.</span><br></br>
                  <span className='emailus'><br></br>
                    9am - 6pm on weekdays<br></br>
                    8am - 5pm on weekends<br></br><br></br>
                    symphony@gmail.com<br></br><br></br>
                    +94 2256 5987<br></br><br></br>
                    SLT mobitel, Lotus rd, <br></br>Colombo 1.
                  </span>
              </form>
            </div>
          </div>
<div className={styles.contactform}>
         <div className={cx(styles["form-contact"],"text-center","mt-5")}>
        <form className={styles.contact}>
        <h1 className="h5 mb-3 fw-bold text-dark " >Fill the details and Submit</h1>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingText" placeholder="Enter Your First Name" />
            <label htmlFor="floatingText">First Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingText" placeholder="Enter Your Last Name" />
            <label htmlFor="floatingText">Last Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Phone Number" />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <input type="message" className="form-control" id="floatingInput" placeholder="Phone Number" />
            <label htmlFor="floatingInput">Message</label>
          </div>
          <button className="btn btn-lg btn-block btn-dark " type="submit">Submit</button>

</form>
          </div>
          </div>
      </section>
              
               
     </section> 
     <Footer/>
     </div>
  )
}