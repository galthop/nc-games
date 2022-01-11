import { useState, useEffect } from "react";
import { getCategories } from "../utilis/api";

const Query = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(({ data }) => {
      return setCategories(data.categories);
    });
  }, []);

  const filterCat = (event) => {
    setSelectedCategory(event.target.value);
    console.log("category changed");
  };

  return (
    <div className="query">
      <h1>This is the dropdown + other querying tools</h1>
      <select defaultValue="All" onChange={filterCat}>
        <option value="All">All</option>
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
