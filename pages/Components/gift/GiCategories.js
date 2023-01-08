import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faBox, faHeadphones, faSquare, faThumbsUp, faTruck, } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box'>
          <ul className="rty2">
            <Link href="./Christmas" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>CHRISTMAS ITEMS</span></i></Link><br></br>
            <Link href="./New" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>NEW YEAR ITEMS</span></i></Link><br></br>
            <Link href="./Mother" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>MOTHERS DAY</span></i></Link><br></br>
            <Link href="./Valentine" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>VALENTINES</span></i></Link><br></br>
            <Link href="./Father" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>FATHERS DAY</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories