import { deleteComment } from "../utilis/api";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

const DeleteButton = ({ comment, setComments, handleDelete, error }) => {
  const user = comment.author;
  const comment_id = comment.comment_id;

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
