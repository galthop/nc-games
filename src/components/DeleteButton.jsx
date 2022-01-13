const DeleteButton = ({ comment, handleDelete }) => {
  const user = comment.author;

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
