import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { getComments } from "../utilis/api";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
      .then(({ data }) => {
        setComments(data.comments);
      })
      .catch((err) => {
        setError(err);
      });
  }, [review_id]);

  console.log(comments);

  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <div className="commentsPage">
      <h1>Here is the post comment form</h1>
      <AddComment setComments={setComments} />
      <h1>These are the comments of a specific review</h1>
      <CommentsList comments={comments} setComments={setComments} />
    </div>
  );
};

export default CommentsPage;
