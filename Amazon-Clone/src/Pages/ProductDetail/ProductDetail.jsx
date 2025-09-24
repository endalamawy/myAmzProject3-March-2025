import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import classes from "../ProductDetail/ProductDetail.module.css";
import { productUrl } from "../../Api/endPoints";

function ProductDetails() {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: "30px" }}>Loading product...</p>;
  if (!product) return <p style={{ padding: "30px" }}>Product not found.</p>;

  return (
    <section className={classes.productDetailsContainer}>
      <div className={classes.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={classes.infoContainer}>
        <h1>{product.title}</h1>
        <p className={classes.category}>Category: {product.category}</p>
        <div className={classes.rating}>
          <Rating value={product.rating?.rate || 0} precision={0.1} readOnly />
          <span> ({product.rating?.count || 0} reviews)</span>
        </div>
        <p className={classes.price}>
          {numeral(product.price).format("$0,0.00")}
        </p>
        <p className={classes.description}>{product.description}</p>
        <button className={classes.addToCart}>Add to Cart</button>
      </div>
    </section>
  );
}

export default ProductDetails;
