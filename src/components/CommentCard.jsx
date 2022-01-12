import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, setComments }) => {
  return (
    <div className="commentCard">
      <li key={comment.comment_id}>
        <h3>
          User: {comment.author}, at {comment.created_at}
        </h3>
        <p>{comment.body}</p>
        <h4>Number of votes: {comment.votes}</h4>
        <DeleteButton comment={comment} setComments={setComments} />
      </li>
    </div>
  );
};

export default CommentCard;
