// import categoryInfo from "./CategoryInfo";
// import CategoryCard from "./CategoryCard";
// import "../Category/Category.css";

// const Categories = () => {
//   return (
//     <div className="categories-container">
//       {categoryInfo.map((cat) => (
//         <CategoryCard
//           key={cat.id}
//           title={cat.title}
//           imgLink={cat.imgLink}
//           link={`/category/${cat.title.toLowerCase()}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Categories;
  

// Big brother update
import categoryInfo from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";

const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      {categoryInfo.map((cat) => (
        <CategoryCard
          key={cat.id}
          title={cat.title}
          imgLink={cat.imgLink}
          link={`/category/${cat.title.toLowerCase()}`}
        />
      ))}
    </div>
  );
};

export default Categories;
