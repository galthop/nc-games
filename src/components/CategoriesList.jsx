import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../utilis/api";
import ErrorPage from "./ErrorPage";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then(({ data }) => {
        setCategories(data.categories);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="categoryList">
      <h1>Game types</h1>
      <ul>
        {categories.map((category) => {
          return (
            <CategoryCard category={category} key={category.category_id} />
          );
        })}
      </ul>
    </div>
  );
};
export default CategoriesList;
