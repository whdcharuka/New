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
            <Link href="./Mobile" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>MOBILE PHONES</span></i></Link><br></br>
            <Link href="./Tele" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>TELEVISIONS</span></i></Link><br></br>
            <Link href="./Com" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>COMPUERS</span></i></Link><br></br>
            <Link href="./Air" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>AIR CONDITIONS</span></i></Link><br></br>
            <Link href="./Game" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>GAMING CONSOLES</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories