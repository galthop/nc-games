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
    <div className="categoriesList">
      <h1 className="categoriesHeader">Game types</h1>
      <ul className="theList">
        {categories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </ul>
    </div>
  );
};
export default CategoriesList;
