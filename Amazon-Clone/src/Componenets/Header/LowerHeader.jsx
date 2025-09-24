// import "./LowerHeader.css";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

// function LowerHeader() {
//   return (
//     <nav className="navbar">
//       {/* Left - Menu Icon + All */}
//       <div className="navbar__menu">
//         <MenuIcon />
//         <span>All</span>
//       </div>

//       {/* Middle Links */}
//       <div className="navbar__links">
//         <Link to="/haul">Amazon Haul</Link>
//         <Link to="/prime-deals">Early Prime Deals</Link>
//         <Link to="/medical">Medical Care</Link>
//         <Link to="/luxury">Luxury Stores</Link>
//         <Link to="/bestsellers">Best Sellers</Link>
//         <Link to="/new-releases">New Releases</Link>
//         <Link to="/basics">Amazon Basics</Link>
//         <Link to="/groceries">Groceries</Link>
//         <Link to="/prime">Prime</Link>
//         <Link to="/registry">Registry</Link>
//         <Link to="/customer-service">Customer Service</Link>
//       </div>

//       {/* Right - Promo */}
//       <div className="navbar__promo">
//         <span>Prime Big Deal Days is October 7-8</span>
//       </div>
//     </nav>
//   );
// }

// export default LowerHeader;

// Big brother update:

import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function LowerHeader() {
  return (
    <nav className={styles.navbar}>
      {/* Left - Menu Icon + All */}
      <div className={styles.navbar__menu}>
        <MenuIcon />
        <span>All</span>
      </div>

      {/* Middle Links */}
      <div className={styles.navbar__links}>
        <Link to="/haul">Amazon Haul</Link>
        <Link to="/prime-deals">Early Prime Deals</Link>
        <Link to="/medical">Medical Care</Link>
        <Link to="/luxury">Luxury Stores</Link>
        <Link to="/bestsellers">Best Sellers</Link>
        <Link to="/new-releases">New Releases</Link>
        <Link to="/basics">Amazon Basics</Link>
        <Link to="/groceries">Groceries</Link>
        <Link to="/prime">Prime</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/customer-service">Customer Service</Link>
      </div>

      {/* Right - Promo */}
      {/* <div className={styles.navbar__promo}>
        <span>Prime Big Deal Days is October 7-8</span>
      </div> */}
    </nav>
  );
}

export default LowerHeader;

