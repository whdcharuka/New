import cx from 'classnames';
import styles from '/styles/AboutUs.module.css'
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import Footer from './Footer';
export default AboutUs;

function AboutUs (){

  return (
    <>
    <div> 
      
    <Head><title>About-Us</title></Head>
      <Navbar/>
      <section className={styles.wrapper}>
       
      <div className={cx(styles["form-about"],"text-center","mt-5")}>
        <div className="mklp" >
          <br></br><br></br><h1 className={styles.text}>About Symphony</h1><br></br>
            <img className={styles.image} src='/images/aboutus.jpg' />
        </div>

        
        <div className="row align-items-md-stretch">

        
      <div className="col-md-6">
      <div className={styles.box1}>
        <div className="h-100 p-5 bg-light border rounded-3">
          
          <h2 className={styles.p1}>About our Company</h2><br></br>
          <p className={styles.p1}>SLT Symphony is one of the Largest Online sharing Marketplaces in Sri Lanka that offers perfect classified advertisements to build your own businesses.<br></br><br></br>

          This platform is uniquely designed to promote your advertisements and consumers can easily browse through all categories and locations.</p>
          
        </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className={styles.box2}>
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2 className={styles.p1}>What we do</h2><br></br>
          <p className={styles.p1}>Our main goal is to Share what we have and finding what we want through the app. SLT symphony is specialized in promoting your advertisements to millions of users.<br></br><br></br>

           We manually review at the advertisements before publishing in our platform in order to make sure the quality is up to our standards. Contact Us for more details.</p>
          
        </div>
      </div>
    </div>
    </div>
</div>
      </section> 
      
      </div>
      <div className={styles.aboutfooter}>
        <Footer/>
      </div>
    </>
  )

}