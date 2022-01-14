import CommentCard from "./CommentCard";

const CommentsList = ({ comments, setComments, setError }) => {
  return (
    <div className="commentsList">
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
                setError={setError}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};
export default CommentsList;
