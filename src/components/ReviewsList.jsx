import { useState, useEffect } from "react";
import { getReviews } from "../utilis/api";
import ReviewCard from "./ReviewCard";
import ErrorPage from "./ErrorPage";

const ReviewsList = ({ selectedCategory, selectedSortBy, selectedOrder }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviews(selectedCategory, selectedSortBy, selectedOrder)
      .then(({ data }) => setReviews(data.reviews))
      .catch((err) => {
        setError(err);
      });
  }, [selectedCategory, selectedOrder, selectedSortBy]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="reviewsList">
      <h1>This is the review list</h1>
      <ul>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
