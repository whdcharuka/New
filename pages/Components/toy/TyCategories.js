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
            <Link href="./TeddyBear" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>TEDDY BEAR</span></i></Link><br></br>
            <Link href="./Bicycle" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>BICYCLES</span></i></Link><br></br>
            <Link href="./Car" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>CAR ITEMS</span></i></Link><br></br>
            <Link href="./Doll" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>DOLLS</span></i></Link><br></br>
            <Link href="./AnimalToy" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>ANIMAL TOYS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories