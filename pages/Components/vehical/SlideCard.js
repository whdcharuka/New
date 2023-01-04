import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Link from 'next/link';
import Sdata from "./Sdata"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      {/* <Slider {...settings}> */}
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                <h3 className='baw'>Vehical Parts</h3>
                  <h6>{value.title}</h6>
                  {/* <p>{value.desc}</p> */}
                  <Link href='./Engine' className='abc'><button className='btn-primary1'>VISIT COLLECTIONS</button></Link>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      {/* </Slider> */}
    </>
  )
}

export default SlideCard
