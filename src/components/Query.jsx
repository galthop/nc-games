import { useState, useEffect } from "react";
import { getCategories } from "../utilis/api";

const Query = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(({ data }) => {
      return setCategories(data.categories);
    });
  }, []);

  return (
    <div className="query">
      <h1>This is the dropdown + other querying tools</h1>
      <select defaultValue={"all"}>
        <option value="all">All</option>
        {categories.map((category) => {
          return (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          );
        })}
      </select>
      <button>ASC/DESC</button>
    </div>
  );
};

export default Query;
