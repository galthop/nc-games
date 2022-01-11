import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://northcoders-backend-hiten.herokuapp.com/api",
});

export const getReviews = (selectedCategory) => {
  if (selectedCategory === "All") {
    selectedCategory = undefined;
  }
  return gamesApi
    .get("/reviews", {
      params: { category: selectedCategory },
    })
    .then((res) => {
      return res;
    });
};
// for querying (params)

export const getReviewById = (reviewNum) => {
  return gamesApi.get(`/reviews/${reviewNum}`).then((res) => {
    return res;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res;
  });
};
