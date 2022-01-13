import DeleteButton from "./DeleteButton";
import { deleteComment } from "../utilis/api";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const CommentCard = ({ comment, setComments }) => {
  const [error, setError] = useState(null);
  const handleDelete = (id) => {
    console.log("you deleted a comment");
    deleteComment(id)
      .then(() => {
        setComments((currentComments) => {
          const result = currentComments.filter((comment) => {
            return comment.comment_id !== id;
          });
          return result;
        });
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
      });
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="commentCard">
      <li key={comment.comment_id}>
        <h3>
          User: {comment.author}, at {comment.created_at}
        </h3>
        <p>{comment.body}</p>
        <h4>Number of votes: {comment.votes}</h4>
        <DeleteButton
          comment={comment}
          setComments={setComments}
          handleDelete={handleDelete}
        />
      </li>
    </div>
  );
};

export default CommentCard;
