import Query from "./Query";
import ReviewsList from "./ReviewsList";
import { useState } from "react";

const ReviewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");

  return (
    <div className="reviewspage">
      <h1>This is the homepage</h1>
      <Query
        setSelectedCategory={setSelectedCategory}
        setSelectedSortBy={setSelectedSortBy}
        setSelectedOrder={setSelectedOrder}
        selectedOrder={selectedOrder}
      />
      <ReviewsList
        selectedCategory={selectedCategory}
        selectedSortBy={selectedSortBy}
        selectedOrder={selectedOrder}
      />
    </div>
  );
};

export default ReviewsPage;
