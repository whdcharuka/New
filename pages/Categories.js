import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer';
import Link from 'next/link';

const Categories = () => {
  const data = [
    {
      path:"/Vehicalparts",
      cateImg: "./images/Categories/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"/ElectronicDevices",
      cateImg: "./images/Categories/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"/HomeGarden",
      cateImg: "./images/Categories/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"Animals",
      cateImg: "./images/Categories/cat.png",
      cateName: "PETS",
    },
    {
      path:"/Toys",
      cateImg: "./images/Categories/toys.png",
      cateName: "TOYS",
    },
    {
      path:"/HobbySport",
      cateImg: "./images/Categories/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"/Foods",
      cateImg: "./images/Categories/burger.png",
      cateName: "FOODS",
    },
    {
      path:"/Education",
      cateImg: "./images/Categories/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"/Essentials",
      cateImg: "./images/Categories/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"/FashionBeauty",
      cateImg: "./images/Categories/dress.png",
      cateName: "FASHION",
    },
    {
      path:"/Gifts",
      cateImg: "./images/Categories/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"/Music",
      cateImg: "./images/Categories/guitar.png",
      cateName: "MUSIC",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <Link href={value.path} className='abc'>
              <div className='box f_flex' key={index}>
              <div className="category1">
                   <img src={value.cateImg} alt='' />
                  </div>
                  <img src={value.cateImg} alt='' />
                  <span>{value.cateName}</span>    
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories


