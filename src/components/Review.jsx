import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById, patchReviewLikes } from "../utilis/api";
import ErrorPage from "./ErrorPage";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [votes, setVotes] = useState(0);
  const dayjs = require("dayjs");

  const changeVotes = () => {
    setVotes((currentLikes) => currentLikes + 1);
    patchReviewLikes(review_id, 1).catch((err) => {
      setVotes((currentLikes) => currentLikes - 1);
      setError(err);
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewById(review_id)
      .then(({ data }) => {
        setReview(data.review);
        setVotes(data.review.votes);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

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
        <p>
          Created at: {dayjs(review.created_at).format("MMMM D, YYYY h:mm A")}
        </p>
        <h4>Game's designer: {review.designer}</h4>
        <h4>Category: {review.category}</h4>
      </section>
      <button onClick={changeVotes}>Votes: {votes}</button>
      <Link to={`/reviews/${review_id}/comments`}>
        Comments: {review.comment_count}
      </Link>
    </div>
  );
};

export default Review;
