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
            <Link href="./Cat" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>CATS</span></i></Link><br></br>
            <Link href="./Petfood" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>PET FOODS</span></i></Link><br></br>
            <Link href="./Dog" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>DOGS</span></i></Link><br></br>
            <Link href="./Farm" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>FARM ANIMALS</span></i></Link><br></br>
            <Link href="./Fish" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>FISH</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories