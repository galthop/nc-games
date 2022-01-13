import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://northcoders-backend-hiten.herokuapp.com/api",
});

export const getReviews = (selectedCategory, selectedSortBy, selectedOrder) => {
  if (selectedCategory === "All") {
    selectedCategory = undefined;
  }
  return gamesApi
    .get("/reviews", {
      params: {
        category: selectedCategory,
        sort_by: selectedSortBy,
        order: selectedOrder,
      },
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

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res;
  });
};

export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`);
};

export const postComment = (review_id, user, post) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, { username: user, body: post })
    .then((res) => {
      return res;
    });
};

export const patchLikes = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => console.log(res));
};
