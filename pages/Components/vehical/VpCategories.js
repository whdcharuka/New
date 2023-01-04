import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link href="./Engine"><i class="fa fa-square" aria-hidden="true"><span>ENGINE</span></i></Link>
            <Link href="./Battery"><i class="fa fa-square" aria-hidden="true"><span>BATERY</span></i></Link>
            <Link href="./Wheel"><i class="fa fa-square" aria-hidden="true"><span>WHEEL</span></i></Link>
            <Link href="./Fuel"><i class="fa fa-square" aria-hidden="true"><span>FUEL TANK</span></i></Link>
            <Link href="./Screen"><i class="fa fa-square" aria-hidden="true"><span>WINDSCREEN</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories