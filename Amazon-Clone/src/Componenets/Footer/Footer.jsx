// import styles from "./Footer.module.css";

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       {/* Top Links Section */}
//       <div className={styles.topLinks}>
//         <div className={styles.column}>
//           <h4>Get to Know Us</h4>
//           <a href="#">Careers</a>
//           <a href="#">Blog</a>
//           <a href="#">About Amazon</a>
//           <a href="#">Investor Relations</a>
//         </div>
//         <div className={styles.column}>
//           <h4>Make Money with Us</h4>
//           <a href="#">Sell products on Amazon</a>
//           <a href="#">Affiliate Program</a>
//           <a href="#">Advertise Your Products</a>
//           <a href="#">Self-Publish</a>
//         </div>
//         <div className={styles.column}>
//           <h4>Amazon Payment Products</h4>
//           <a href="#">Amazon Pay</a>
//           <a href="#">Gift Cards</a>
//           <a href="#">Reload Balance</a>
//         </div>
//         <div className={styles.column}>
//           <h4>Let Us Help You</h4>
//           <a href="#">Your Account</a>
//           <a href="#">Shipping Rates</a>
//           <a href="#">Returns & Replacements</a>
//           <a href="#">Help</a>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className={styles.bottomSection}>
//         <p>© 2025 Amazon Clone. All Rights Reserved.</p>
//         <div className={styles.language}>
//           <span role="img" aria-label="globe">
//             🌐
//           </span>{" "}
//           English
//         </div>
//       </div>
//     </footer>
//   );
// }

// Big Brother Update:


// import React from 'react';
// import classes from './Footer.module.css';

// function Footer() {
//   return (
//     <footer className={classes.footer}>
//       <div className={classes.backToTop}>
//         <a href="#">Back to top</a>
//       </div>

//       <div className={classes.linksSection}>
//         <div className={classes.linkColumn}>
//           <h4>Get to Know Us</h4>
//           <ul>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Amazon Newsletter</a></li>
//             <li><a href="#">About Amazon</a></li>
//             <li><a href="#">Accessibility</a></li>
//             <li><a href="#">Sustainability</a></li>
//             <li><a href="#">Press Center</a></li>
//             <li><a href="#">Investor Relations</a></li>
//             <li><a href="#">Amazon Devices</a></li>
//             <li><a href="#">Amazon Science</a></li>
//           </ul>
//         </div>

//         <div className={classes.linkColumn}>
//           <h4>Make Money with Us</h4>
//           <ul>
//             <li><a href="#">Sell on Amazon</a></li>
//             <li><a href="#">Sell apps on Amazon</a></li>
//             <li><a href="#">Supply to Amazon</a></li>
//             <li><a href="#">Protect & Build Your Brand</a></li>
//             <li><a href="#">Become an Affiliate</a></li>
//             <li><a href="#">Become a Delivery Driver</a></li>
//             <li><a href="#">Start a Package Delivery Business</a></li>
//             <li><a href="#">Advertise Your Products</a></li>
//             <li><a href="#">Self-Publish with Us</a></li>
//             <li><a href="#">Become an Amazon Hub Partner</a></li>
//           </ul>
//         </div>

//         <div className={classes.linkColumn}>
//           <h4>Amazon Payment Products</h4>
//           <ul>
//             <li><a href="#">Amazon Visa</a></li>
//             <li><a href="#">Amazon Store Card</a></li>
//             <li><a href="#">Amazon Secured Card</a></li>
//             <li><a href="#">Amazon Business Card</a></li>
//             <li><a href="#">Shop with Points</a></li>
//             <li><a href="#">Credit Card Marketplace</a></li>
//             <li><a href="#">Reload Your Balance</a></li>
//             <li><a href="#">Gift Cards</a></li>
//             <li><a href="#">Amazon Currency Converter</a></li>
//           </ul>
//         </div>

//         <div className={classes.linkColumn}>
//           <h4>Let Us Help You</h4>
//           <ul>
//             <li><a href="#">Your Account</a></li>
//             <li><a href="#">Your Orders</a></li>
//             <li><a href="#">Shipping Rates & Policies</a></li>
//             <li><a href="#">Amazon Prime</a></li>
//             <li><a href="#">Returns & Replacements</a></li>
//             <li><a href="#">Manage Your Content and Devices</a></li>
//             <li><a href="#">Recalls and Product Safety Alerts</a></li>
//             <li><a href="#">Registry & Gift List</a></li>
//             <li><a href="#">Help</a></li>
//           </ul>
//         </div>
//       <hr />
//      <div className={classes.logo_container1}>
//         <img
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           alt="amazon logo"
//           className={classes.logo_img}
//         />
//         <p className={classes.logo_lng}>
//           <TbWorld /> English
//         </p>
//         <p className={classes.logo_price}>USD - U.S. Dollar</p>
//         <p className={classes.logo_flag}>
//           <img
//             src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
//             alt="us flag"
//           />
//           United States
//         </p>
//       </div>
//     </div>    
//     </footer>
//   );
// }

// // export default Footer;

// src/Components/Footer/Footer.jsx

import React from 'react';
import { TbWorld } from 'react-icons/tb';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.backToTop}>
        <a href="#">Back to top</a>
      </div>

      <div className={classes.linksSection}>
        <div className={classes.linkColumn}>
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Amazon Newsletter</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press Center</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Amazon Devices</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>

        <div className={classes.linkColumn}>
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Supply to Amazon</a></li>
            <li><a href="#">Protect & Build Your Brand</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Become a Delivery Driver</a></li>
            <li><a href="#">Start a Package Delivery Business</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
            <li><a href="#">Become an Amazon Hub Partner</a></li>
          </ul>
        </div>

        <div className={classes.linkColumn}>
          <h4>Amazon Payment Products</h4>
          <ul>
            <li><a href="#">Amazon Visa</a></li>
            <li><a href="#">Amazon Store Card</a></li>
            <li><a href="#">Amazon Secured Card</a></li>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Credit Card Marketplace</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div className={classes.linkColumn}>
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Amazon Prime</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Manage Your Content and Devices</a></li>
            <li><a href="#">Recalls and Product Safety Alerts</a></li>
            <li><a href="#">Registry & Gift List</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className={classes.logo_container1}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className={classes.logo_img}
        />
        <p className={classes.logo_lng}>
          <TbWorld /> English
        </p>
        <p className={classes.logo_price}>USD - U.S. Dollar</p>
        <p className={classes.logo_flag}>
          <img
            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            alt="US flag"
          />
          United States
        </p>
      <p className={classes.logo_flag}>
          <img
            src="https://as2.ftcdn.net/jpg/00/32/65/89/1000_F_32658964_UAN2k0ZER3LgMF1OT0V3OB1XkUX1KZcf.jpg"
            // "https://as2.ftcdn.net/jpg/03/77/56/27/1000_F_377562764_ej8rhIaO9VS6ztiRafGUhFTltLtFfTG9.jpg"
            
            alt="ET flag"
          />
          Ethiopia
        </p>
      </div>
    </footer>
  );
}

export default Footer;

