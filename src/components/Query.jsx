import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../utilis/api";

const Query = ({
  setSelectedCategory,
  selectedOrder,
  setSelectedOrder,
  setSelectedSortBy,
}) => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(({ data }) => {
      return setCategories(data.categories);
    });
  }, []);

  const filterCat = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterSortBy = (event) => {
    setSelectedSortBy(event.target.value);
  };

  const filterOrder = (event) => {
    setSelectedOrder(selectedOrder === "desc" ? "asc" : "desc");
    console.log(selectedOrder);
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

      <select defaultValue="created_at" onChange={filterSortBy}>
        <option value="created_at">Created at</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes">Number of votes</option>
      </select>
      <button onClick={filterOrder}>Selected: {selectedOrder}</button>
    </div>
  );
};

export default Query;
