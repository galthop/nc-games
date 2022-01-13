import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../utilis/api";

const Query = ({
  selectedOrder,
  setSelectedOrder,
  setSelectedSortBy,
  category,
  setError,
}) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then(({ data }) => {
        return setCategories(data.categories);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const filterCat = (event) => {
    navigate(`/category/${event.target.value}`);
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
      <h4>Search for reviews below</h4>
      <select value={category} onChange={filterCat}>
        <option value="All">All</option>
        {categories.map((specificCategory) => {
          return (
            <option key={specificCategory.slug} value={specificCategory.slug}>
              {specificCategory.slug}
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
