import { useContext } from "react";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import styles from "./Product.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { Link, useLocation } from "react-router-dom";

// function ProductCard({ product }) {
//   const { image, title, id, rating, price } = product || {};
//   const [{ basket }, dispatch] = useContext(DataContext);

//   const addToCart = () => {
//     console.log("Adding to cart:", { id, title }); // Debug
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: { id, title, image, price, rating },
//     });
//   };

//   if (!product) return <p>⚠️ No product data</p>;

//   return (
//     <div className={styles.productCard}>
//       <Link to={`/products/${id}`}>
//         <img className={styles.productImage} src={image} alt={title} />
//       </Link>
//       <div className={styles.productInfo}>
//         <h3>{title}</h3>
//         <div className={styles.productRating}>
//           <Rating value={rating?.rate || 0} precision={0.1} readOnly />
//           <small> ({rating?.count || 0})</small>
//         </div>
//         <div className={styles.productPrice}>
//           {numeral(price).format("$0,0.00")}
//         </div>
//         <button onClick={addToCart} className={styles.addToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
function ProductCard({ product }) {
  const { image, title, id, rating, price } = product || {};
  const [{ basket }, dispatch] = useContext(DataContext);

  const location = useLocation(); // get current URL path

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, image, price, rating },
    });
  };

  if (!product) return <p>⚠️ No product data</p>;

  return (
    <div className={styles.productCard}>
      <Link to={`/products/${id}`}>
        <img className={styles.productImage} src={image} alt={title} />
      </Link>
      <div className={styles.productInfo}>
        <h3>{title}</h3>
        <div className={styles.productRating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small> ({rating?.count || 0})</small>
        </div>
        <div className={styles.productPrice}>
          {numeral(price).format("$0,0.00")}
        </div>

        {/* Only show Add to Cart button if NOT on cart page */}
        {location.pathname !== "/cart" && (
          <button onClick={addToCart} className={styles.addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
