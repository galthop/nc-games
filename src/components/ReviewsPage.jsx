import Query from "./Query";
import ReviewsList from "./ReviewsList";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ReviewsPage = () => {
  const { category, order, sort_by } = useParams();

  return (
    <div className="reviewspage">
      <h1>This is the homepage</h1>
      <Query />
      <ReviewsList
        // selectedCategory={selectedCategory}
        // selectedSortBy={selectedSortBy}
        // selectedOrder={selectedOrder}
        categorytest={category}
        ordertest={order}
        sort_bytest={sort_by}
      />
    </div>
  );
};

export default ReviewsPage;
