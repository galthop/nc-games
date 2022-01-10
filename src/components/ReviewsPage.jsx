import Query from "./Query";
import ReviewsList from "./ReviewsList";

const ReviewsPage = () => {
  return (
    <div className="reviewspage">
      <h1>This is the homepage</h1>
      <Query />
      <ReviewsList />
    </div>
  );
};

export default ReviewsPage;
