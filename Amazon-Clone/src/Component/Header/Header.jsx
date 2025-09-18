import React from 'react';
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
// import { BsSearch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Header=()=>{
  return (
  <section>
    <div className= {classes.header_continer}>
    <div className={classes.logo_container}>
        {/* {logo} */}
        <a href='/'>
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon logo'/>
        </a>
        {/* {delivery} */}
          <div className= {classes.delivery}>
          <span>
            {/* {icon} */}
          <SlLocationPin />               
        </span>
        <div>
        <p> Deliverd to</p>
            <span>
            Ethiopia
            </span>
          </div>
          </div>
    </div>
    <div className={classes.search}>
        {/* {Search} */}
        <select name='' id=''>
            <option value="">All</option>
        </select>
        <input type="text" />
        {/* {icon} */}
      {/* <BsSearch size ={25} /> */}
      <CiSearch size={25} />
    </div>
    {/* {Other section} */}
                <div className={classes.order_container}>
                <a href='' className={classes.language}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1920px-Flag_of_the_United_States_%28Web_Colors%29.svg.png" alt="" />  
                  <select name='' id=''>
                    <option value="">EN</option>
                  </select>
                </a>
                      {/* {three components} */}
                    <a href=''>
                    <p> Sign IN</p>
                    <span> Account & List</span>
                </a>
                     {/* {orders} */}
                <a href=''>
                    <p>returns</p>
                    <span>& Orders</span>
                    </a>
                 {/* {cart} */}
                <a href='' className={classes.cart}>
                {/* {icon} */}
                <BiCart size={25} />
                <span>0 </span>
                </a>
                </div>
                <LowerHeader/>
    </div>
  </section>
  )
}
export default Header















