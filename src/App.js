import "./App.css";
import Nav from "./components/Nav";
import ReviewsPage from "./components/ReviewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewsPage />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/reviews/:review_id/comments" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
