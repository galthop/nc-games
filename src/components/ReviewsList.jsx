import { useState, useEffect } from "react";
import { getReviews } from "../utilis/api";
import ReviewCard from "./ReviewCard";
import ErrorPage from "./ErrorPage";

const ReviewsList = ({
  selectedCategory,
  selectedSortBy,
  selectedOrder,
  categorytest,
  ordertest,
  sort_bytest,
}) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  if (!categorytest) {
    categorytest = "All";
  }
  if (!ordertest) {
    ordertest = "desc";
  }

  if (!sort_bytest) {
    sort_bytest = "created_at";
  }

  useEffect(() => {
    getReviews(categorytest, sort_bytest, ordertest)
      .then(({ data }) => setReviews(data.reviews))
      .catch((err) => {
        setError(err);
      });
  }, [categorytest, sort_bytest, ordertest]);

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
