import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';
import SlideCard from "./SlideCard"

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome
