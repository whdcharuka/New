import Link from 'next/link';
import Image from 'next/image';

export const HomePage = () => (
  <>
  <h5>Browse items by categories</h5>
  
<ul className='hlist'>
  <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/car.png'/><Link href="/" passHref><a>Vehical Parts</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/cat.png'/><Link href="/" passHref><a>Animals</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/burger.png'/><Link href="/" passHref><a>Foods</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/education.png'/><Link href="/" passHref><a>Education</a></Link>
          </div>
          </li>
          </ul>

          <ul className='hlist'>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/smartphone (2).png'/><Link href="/" passHref><a>Electronics</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/giftbox.png'/><Link href="/" passHref><a>Gifts</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/house.png'/><Link href="/" passHref><a>Home</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/sports.png'/><Link href="/" passHref><a>Sports</a></Link>
          </div>
          </li>
          </ul>

          <ul className='hlist'>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/essential-oil.png'/><Link href="/" passHref><a>Essential Item</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/toys.png'/><Link href="/" passHref><a>Toys</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/guitar.png'/><Link href="/" passHref><a>Music</a></Link>
          </div>
          </li>
          <li className='hlist1'>
          <div className="image">
            <Image width={60} height={60} alt='' src='/images/categories/dress.png'/><Link href="/" passHref><a>Fashion</a></Link>
          </div>
          </li>
          </ul>
  <h5>How it works</h5>

  <a>Create free account</a><br></br>
  <p>cdscsdvs</p>
  <a>Create free account</a><br></br>
  <a>Create free account</a><br></br>
  </>
);


// const Wrapper = () => {
//   const data = [
//     {
//       cateImg: "./images/Categories/car.png",
//       title: "Vehical Parts",
//       path:"./Vehicalparts",
//     },
//     {
//       cateImg: "./images/Categories/smartphone (2).png",
//       title: "Electronics",
//       path:"./ElectronicDevices",
//     },
//     {
//       cateImg: "./images/Categories/house.png",
//       title: "Home & Garden",
//       path:"./HomeGarden",
//     },
//     {
//       cateImg: "./images/Categories/cat.png",
//       title: "Pets",
//       path:"./Animals",
//     },
//     {
//       cateImg: "./images/Categories/toys.png",
//       title: "Toys",
//       path:"/Toys",
//     },
//     {
//       cateImg: "./images/Categories/sports.png",
//       title: "Hobby & Sport",
//       path:"./HobbySport",
//     },
//     {
//       cateImg: "./images/Categories/burger.png",
//       title: "Food",
//       path:"./Foods",
//     },
//     {
//       cateImg: "./images/Categories/education.png",
//       title: "Education",
//       path:"./Education",
//     },
//     {
//       cateImg: "./images/Categories/essential-oil.png",
//       title: "Essentials",
//       path:"./Essentials",
//     },
//     {
//       cateImg: "./images/Categories/dress.png",
//       title: "Fashion & Beauty",
//       path:"./FashionBeauty",
//     },
//     {
//       cateImg: "./images/Categories/giftbox.png",
//       title: "Gifts",
//       path:"./Gifts",
//     },
//     {
//       cateImg: "./images/Categories/guitar.png",
//       title: "Music",
//       path:"./Music",
//     },
//   ]
//   return (
//     <>
//       <section className='wrapper123 wbackground123'>
//       <h1 className="how1">Browse items by category</h1>
//         <div className='wcontainer grid5'>
//           {data.map((val, index) => {
//             return (
//               <div key={index}>
                
//                 <div className="category1">
//                  <img src={val.cateImg} alt='' />
//                 </div>
//                 <span>{val.title}</span>
                
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Wrapper