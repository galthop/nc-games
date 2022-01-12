import { deleteComment } from "../utilis/api";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const DeleteButton = ({ comment, setComments, handleDelete, error }) => {
  const user = comment.author;
  const comment_id = comment.comment_id;
  //const [error, setError] = useState(null);

  // const handleDelete = () => {
  //   console.log("you deleted a comment");
  //   deleteComment(comment_id)
  //     .then(() => {
  //       setComments((currentComments) => {
  //         return currentComments.filter((comment) => {
  //           return comment.comment_id !== comment_id;
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };

  // this will produce an error message where the button was --- this is easy to miss and does not make much sense
  // CHANGE
  if (error) {
    return <ErrorPage error={error} />;
  }

  //assuming jessjelly is logged in and can delete their comments (but no one else's)
  return user === "jessjelly" ? (
    <button
      className="deleteButton-enabled"
      onClick={() => handleDelete(comment.comment_id)}
    >
      Delete comment
    </button>
  ) : (
    <button className="deleteButton-disabled" disabled>
      Delete comment
    </button>
  );
};

export default DeleteButton;
