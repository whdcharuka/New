import React from "react"
import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck, faSquare } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';
import SliderHome from "./Slider"

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box'>
          <ul className="rty2">
            <Link href="./Violin" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty" /><span className='cvb'>VIOLINS</span></i></Link><br></br>
            <Link href="./Keyboard" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>KEYBOARDS</span></i></Link><br></br>
            <Link href="./Piano" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>PIANOS</span></i></Link><br></br>
            <Link href="./Drum" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>DRUMSET</span></i></Link><br></br>
            <Link href="./Guitar" className="rty1" ><i> <FontAwesomeIcon icon={faSquare} className="rty"/><span className='cvb'>GUITAR</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

