import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';
import Categories from "../Categories"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
    <Navbar/>
      <section className='home'>
      <Categories />
        <div className='container d_flex'>
          <SliderHome />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home