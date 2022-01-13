import Query from "./Query";
import ReviewsList from "./ReviewsList";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ReviewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  const { category } = useParams();

  return (
    <div className="reviewspage">
      <h1>This is the homepage</h1>
      <Query
        setSelectedCategory={setSelectedCategory}
        setSelectedSortBy={setSelectedSortBy}
        setSelectedOrder={setSelectedOrder}
        selectedOrder={selectedOrder}
        category={category}
      />
      <ReviewsList
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        selectedSortBy={selectedSortBy}
        selectedOrder={selectedOrder}
        category={category}
      />
    </div>
  );
};

export default ReviewsPage;
