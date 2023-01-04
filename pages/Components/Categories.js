import Image from 'next/image'
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer';
import Link from 'next/link';

const Categories = () => {
  const data = [
    {
      path:"/Components/vehical/Vehicalparts",
      cateImg: "/images/Categories/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"/Components/elec/Electronics",
      cateImg: "/images/Categories/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"/Components/home/HomeGarden",
      cateImg: "/images/Categories/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"/Components/animal/Animals",
      cateImg: "/images/Categories/cat.png",
      cateName: "PETS",
    },
    {
      path:"/Components/toy/Toys",
      cateImg: "/images/Categories/toys.png",
      cateName: "TOYS",
    },
    {
      path:"/Components/hobby/HobbySport",
      cateImg: "/images/Categories/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"/Components/food/Foods",
      cateImg: "/images/Categories/burger.png",
      cateName: "FOODS",
    },
    {
      path:"/Components/edu/Education",
      cateImg: "/images/Categories/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"/Components/essen/Essentials",
      cateImg: "/images/Categories/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"/Components/fashion/FashionBeauty",
      cateImg: "/images/Categories/dress.png",
      cateName: "FASHION",
    },
    {
      path:"/Components/gift/Gifts",
      cateImg: "/images/Categories/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"/Components/music/Music",
      cateImg: "/images/Categories/guitar.png",
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


