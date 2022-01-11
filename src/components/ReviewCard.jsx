import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <li>
        <h2>{review.title}</h2>
        <h3>By {review.owner}</h3>
        <h4>Category: {review.category}</h4>
        <p>{review.review_body.slice(0, 100)}...</p>
        <Link to={`/reviews/${review.review_id}`}>See the full review</Link>
      </li>
    </div>
  );
};

export default ReviewCard;
