import { useState, useEffect } from "react";
import { getComments } from "../utilis/api";
import CommentCard from "./CommentCard";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
      .then(({ data }) => setComments(data.comments))
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="commentsList">
      <h1>This is the comments list</h1>
      <ul>
        {comments.length === 0 ? (
          <p>There are no comments for this review!</p>
        ) : (
          comments.map((comment) => {
            return (
              <CommentCard
                setComments={setComments}
                comment={comment}
                key={comment.comment_id}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};
export default CommentsList;
