import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { getComments } from "../utilis/api";
import { useParams } from "react-router-dom";

const CommentsPage = ({ setError }) => {
  const [comments, setComments] = useState([]);
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

  return (
    <div className="commentsPage">
      <h1>Comments for review #{review_id}</h1>
      <AddComment setComments={setComments} setError={setError} />
      <CommentsList
        comments={comments}
        setComments={setComments}
        setError={setError}
      />
    </div>
  );
};

export default CommentsPage;
