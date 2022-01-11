import { useState, useEffect } from "react";
import { getReviews } from "../utilis/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ selectedCategory }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(selectedCategory).then(({ data }) => setReviews(data.reviews));
  }, [selectedCategory]);

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
