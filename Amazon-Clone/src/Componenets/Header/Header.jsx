// import "../Header/Header.css";
// import { Link } from "react-router-dom";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useContext } from "react";
// import { DataContext } from "../DataProvider/DataProvider";

// function Header() {
//   const [{ basket }] = useContext(DataContext); // get basket from context

//   return (
//     <header className="header">
//       {/* Left Section (Logo + Location) */}
//       <div className="header__left">
//         <Link to="/">
//           <img
//             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//             alt="amazon logo"
//             className="header__logo"
//           />
//         </Link>

//         <div className="header__location">
//           <LocationOnIcon className="header__locationIcon" />
//           <div>
//             <p>Delivering to</p>
//             <span>Ethiopia</span>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section (Search Bar) */}
//       <div className="header__search">
//         <select className="header__searchCategory">
//           <option>All</option>
//           <option>Electronics</option>
//           <option>Jewelery</option>
//           <option>Men's Clothing</option>
//           <option>Women's Clothing</option>
//         </select>
//         <input type="text" placeholder="Search Amazon" />
//         <button className="header__searchButton">
//           <SearchIcon />
//         </button>
//       </div>

//       {/* Language Selector */}
//       <div className="header__language">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//           alt="US Flag"
//           className="header__flag"
//         />
//         <span>EN</span>
//         <ArrowDropDownIcon fontSize="small" />
//       </div>

//       {/* Right Section (Nav Options) */}
//       <div className="header__right">
//         <Link to="/auth" className="header__option">
//           <span>Hello, sign in</span>
//           <span className="header__optionBold">Account & Lists</span>
//         </Link>

//         <Link to="/orders" className="header__option">
//           <span>Returns</span>
//           <span className="header__optionBold">& Orders</span>
//         </Link>

//         {/* Cart (Dynamic Count) */}
//         <Link to="/cart" className="header__cart">
//           <ShoppingCartIcon />
//           <span className="header__cartCount">{basket.length}</span>
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Header;

// Big Brother update:
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }] = useContext(DataContext);

  return (
    <header className={styles.header}>
      {/* Left Section (Logo + Location) */}
      <div className={styles.header__left}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className={styles.header__logo}
          />
        </Link>

        <div className={styles.header__location}>
          <LocationOnIcon className={styles.header__locationIcon} />
          <div>
            <p>Delivering to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Middle Section (Search Bar) */}
      <div className={styles.header__search}>
        <select className={styles.header__searchCategory}>
          <option>All</option>
          <option>Electronics</option>
          <option>Jewelery</option>
          <option>Men's Clothing</option>
          <option>Women's Clothing</option>
        </select>
        <input type="text" placeholder="Search Amazon" />
        <button className={styles.header__searchButton}>
          <SearchIcon />
        </button>
      </div>

      {/* Language Selector */}
      <div className={styles.header__language}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
          className={styles.header__flag}
        />
        <span>EN</span>
        <ArrowDropDownIcon fontSize="small" />
      </div>

      {/* Right Section (Nav Options) */}
      <div className={styles.header__right}>
        <Link to="/auth" className={styles.header__option}>
          <span>Hello, sign in</span>
          <span className={styles.header__optionBold}>Account & Lists</span>
        </Link>

        <Link to="/orders" className={styles.header__option}>
          <span>Returns</span>
          <span className={styles.header__optionBold}>& Orders</span>
        </Link>

        {/* Cart (Dynamic Count) */}
        <Link to="/cart" className={styles.header__cart}>
          <ShoppingCartIcon />
          <span className={styles.header__cartCount}>{basket.length}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
