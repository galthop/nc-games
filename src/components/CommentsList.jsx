import CommentCard from "./CommentCard";

const CommentsList = ({ comments, setComments }) => {
  console.log(comments);

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
