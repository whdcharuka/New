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
            <Link href="./Sport" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>SPORTS</span></i></Link><br></br>
            <Link href="./Travelling" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>TRAVELLING ITEMS</span></i></Link><br></br>
            <Link href="./Art" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>ARTS</span></i></Link><br></br>
            <Link href="./Gym" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>GYM ITEMS</span></i></Link><br></br>
            <Link href="./Collection" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>COLLECTIONS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories