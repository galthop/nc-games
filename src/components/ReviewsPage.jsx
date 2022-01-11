import Query from "./Query";
import ReviewsList from "./ReviewsList";
import { useState } from "react";

const ReviewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="reviewspage">
      <h1>This is the homepage</h1>
      <Query setSelectedCategory={setSelectedCategory} />
      <ReviewsList selectedCategory={selectedCategory} />
    </div>
  );
};

export default ReviewsPage;
