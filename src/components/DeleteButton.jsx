import { deleteComment } from "../utilis/api";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const DeleteButton = ({ comment, setComments }) => {
  const user = comment.author;
  const comment_id = comment.comment_id;
  const [error, setError] = useState(null);

  const handleClick = () => {
    setComments((currentComments) => {
      const updatedComments = [...currentComments];
      const indexOfComment = updatedComments.indexOf(comment);
      currentComments.splice(indexOfComment, 1);
      return updatedComments;
    });
    console.log("you deleted a comment");
    deleteComment(comment_id)
      .then(() => {})
      .catch((err) => {
        setError(err);
      });
  };

  // this will produce an error message where the button was --- this is easy to miss and does not make much sense
  // CHANGE
  if (error) {
    return <ErrorPage error={error} />;
  }

  //assuming jessjelly is logged in and can delete their comments (but no one else's)
  return user === "jessjelly" ? (
    <button className="deleteButton-enabled" onClick={handleClick}>
      Delete comment
    </button>
  ) : (
    <button className="deleteButton-disabled" disabled>
      Delete comment
    </button>
  );
};

export default DeleteButton;
