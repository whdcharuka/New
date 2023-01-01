import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const Services = () =>{
    
  return (
    <div>
        <Head><title>Terms & Conditions</title></Head>
        <Navbar/>
    <section className={styles.bg1}>
   
        <h1 className={styles.text1}>Terms & Conditions</h1>
    <Image
      src={service}
      className={styles.image}
    />
   
        <div className='container'>
            <div className='row'>
                
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faTruck} /></i>
                            <h5>Fast Delivery</h5>
                            <p>We provide lslandwide delivery within 4-7 days.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0 '>
                        <div className='card-body'>
                           <i> <FontAwesomeIcon icon={faArchive} /></i>
                            <h5>Quality Product</h5>
                            <p>We sell genuine products with company authorized.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faThumbsUp} /></i>
                            <h5>Shop With Confidence </h5>
                            <p>Confident and active online services.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faHeadphones} /></i>
                            <h5>24/7 Support</h5>
                            <p>Call our hotlines during office hours for any questions or inquiries.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className={styles.servicesfooter}>
        <Footer/>
      </div>
    </div>
  )   
  }
  
  export default Services