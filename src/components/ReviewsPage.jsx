import Query from "./Query";
import ReviewsList from "./ReviewsList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ReviewsPage = () => {
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");
  const [error, setError] = useState(null);

  const { category } = useParams();

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="reviewspage">
      <Query
        setSelectedSortBy={setSelectedSortBy}
        setSelectedOrder={setSelectedOrder}
        selectedOrder={selectedOrder}
        category={category}
        setError={setError}
      />
      <ReviewsList
        selectedSortBy={selectedSortBy}
        selectedOrder={selectedOrder}
        category={category}
        setError={setError}
      />
    </div>
  );
};

export default ReviewsPage;
