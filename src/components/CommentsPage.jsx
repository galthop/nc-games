import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentsPage = () => {
  return (
    <div className="commentsPage">
      <h1>Here is the post comment form</h1>
      <AddComment />
      <h1>These are the comments of a specific review</h1>
      <CommentsList />
    </div>
  );
};

export default CommentsPage;
