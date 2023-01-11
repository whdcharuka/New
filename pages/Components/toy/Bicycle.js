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
import TyCategories from "./TyCategories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "/images/Toys/13.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "/images/Toys/14.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "/images/Toys/15.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    // {
    //   path:"./Vp4",
    //   cateImg: "/images/Toys/16.jpg",
    //   title: "Oil filter ",
    //   brand:"Apple",
    //   model:"single",
    //   decs: "You can use decorate your table Table suitable",
    //   phone:"021548936",
    //   email:"ergset@gmail.com",
    // },
  ]
  return (
    <>
    <Navbar/>
    <h1 className='qwe3'>Bicycle</h1>
    <Categories/>
      <TyCategories />
      <section className='wrapper wbackground'>
        <div className='wcontainer1 grid9'>
          {data.map((val, index) => {
            return (
              <div className='vpproduct' key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h3>{val.title}</h3>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                <Link href={val.phone}><button className='btn--medium'>CONTACT</button></Link>
              </div>
            ) 
          })}
        </div>
      </section> 
      <Footer/>
    </>
  )
}

export default Wrapper