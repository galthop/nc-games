import "./App.css";
import Nav from "./components/Nav";
import CategoriesList from "./components/CategoriesList";
import CommentsPage from "./components/CommentsPage";
import Review from "./components/Review";
import ReviewsPage from "./components/ReviewsPage";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route
            path="/category/:category/order/:order/sort_by/:sort_by"
            element={<ReviewsPage />}
          />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route
            path="/reviews/:review_id/comments"
            element={<CommentsPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
