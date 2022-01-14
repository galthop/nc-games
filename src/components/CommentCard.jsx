import DeleteButton from "./DeleteButton";
import { deleteComment } from "../utilis/api";

const CommentCard = ({ comment, setComments, setError }) => {
  const dayjs = require("dayjs");

  const handleDelete = (id) => {
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
        setError(err);
      });
  };

  return (
    <div className="commentCard">
      <li key={comment.comment_id}>
        <h3>
          User: {comment.author}, at{" "}
          {dayjs(comment.created_at).format("MMMM D, YYYY h:mm A")}
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
