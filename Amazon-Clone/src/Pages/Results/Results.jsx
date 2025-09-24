// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import CategoryCard from "../../Components/Category/CategoryCard";
// import { productUrl } from "../../../src/Api/endPoints";
// import "./Results.css";

// function Results() {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // fetch products filtered by category
//     fetch(`${productUrl}/category/${categoryName}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const mappedData = data.map((item) => ({
//           id: item.id,
//           title: item.title,
//           imgLink: item.image,
//           link: `/products/${item.id}`, // route to ProductDetails
//         }));
//         setProducts(mappedData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching category products:", err);
//         setLoading(false);
//       });
//   }, [categoryName]);

//   if (loading) return <p>Loading...</p>;
//   if (!products.length) return <p>No products found in this category.</p>;

//   return (
//     <div className="categories-container">
//       {products.map((product) => (
//         <CategoryCard
//           key={product.id}
//           title={product.title}
//           imgLink={product.imgLink}
//           link={product.link}
//         />
//       ))}
//     </div>
//   );
// }

// export default Results;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Results.module.css";
import ProductCard from "../../Componenets/Products/ProductCard";
import { productUrl } from "../../Api/endPoints";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <p style={{ padding: "30px" }}>Loading products...</p>;
  if (!results.length)
    return <p style={{ padding: "30px" }}>No products found.</p>;

  return (
    <section style={{ padding: "30px" }}>
      <h1>Results</h1>
      <p>Category / {categoryName}</p>
      <hr />
      <div className={classes.products_container}>
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Results;
