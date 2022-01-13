import { useState, useEffect } from "react";
import { getReviews } from "../utilis/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ selectedSortBy, selectedOrder, category, setError }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category, selectedSortBy, selectedOrder)
      .then(({ data }) => {
        setReviews(data.reviews);
      })
      .catch((err) => {
        setError(err);
      });
  }, [category, selectedOrder, selectedSortBy]);

  return (
    <div className="reviewsList">
      <ul>
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
