import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utilis/api";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewById(review_id).then(({ data }) => {
      return setReview(data.review);
    });
  }, []);

  return (
    <div className="reviewById">
      <section className="reviewArticle">
        <h1>{review.title}</h1>
        <h2>Written by {review.owner}</h2>
        <img
          src={
            !review.review_img_url
              ? "http://www.rcdrilling.com/wp-content/uploads/2013/12/default_image_01-1024x1024-570x760.png"
              : review.review_img_url
          }
          alt={review.title}
          image
        />
        <p>{review.review_body}</p>
        <p>Created at: {review.created_at}</p>
        <h4>Game's designer: {review.designer}</h4>
        <h4>Category: {review.category}</h4>
      </section>
      <button>Votes: {review.votes}</button>
      <Link to={`/reviews/${review_id}/comments`}>
        Comments: {review.comment_count}
      </Link>
    </div>
  );
};

export default Review;
