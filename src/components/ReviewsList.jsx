import { useState, useEffect } from "react";
import { getReviews } from "../utilis/api";
import ReviewCard from "./ReviewCard";
import ErrorPage from "./ErrorPage";

const ReviewsList = ({
  setSelectedCategory,
  selectedSortBy,
  selectedOrder,
  category,
}) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviews(category, selectedSortBy, selectedOrder)
      .then(({ data }) => {
        setReviews(data.reviews);
        setSelectedCategory(category);
      })
      .catch((err) => {
        setError(err);
      });
  }, [category, selectedOrder, selectedSortBy]);

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
