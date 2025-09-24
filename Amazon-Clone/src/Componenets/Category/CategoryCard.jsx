// import "./CategoryCard.css";
// import { Link } from "react-router-dom";
// const CategoryCard = ({ title, imgLink, link }) => {
//   return (
    
//     <div className="category-card">
//       <h2 className="card-title">{title}</h2>
//       <img className="card-image" src={imgLink} alt={title} />
//       <Link to={link} className="shop-now-btn">
//         Shop Now
//       </Link>
//     </div>
    
//   );
// };

// export default CategoryCard;
 


// Big brother update:

import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const CategoryCard = ({ title, imgLink, link }) => {
  return (
    <div className={styles.categoryCard}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <img className={styles.cardImage} src={imgLink} alt={title} />
      <Link to={link} className={styles.shopNowBtn}>
        Shop Now
      </Link>
    </div>
  );
};

export default CategoryCard;
