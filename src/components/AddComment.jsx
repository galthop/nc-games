import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utilis/api";
import ErrorPage from "./ErrorPage";

const AddComment = ({ setComments }) => {
  const { review_id } = useParams();
  const [error, setError] = useState(null);
  const [post, setPost] = useState("");

  const handleSubmit = () => {
    postComment(review_id, "jessjelly", post)
      .then((res) => {
        setComments((currentComments) => [
          ...currentComments,
          res.data.comment,
        ]);
        console.log("comment posted");
      })
      .catch((err) => {
        setError(err);
      });
    setPost("");
  };

  // CHANGE
  if (error) {
    <ErrorPage error={error} />;
  }

  return (
    <div className="postComment">
      <form>
        <input
          type="text"
          required
          placeholder="Comment on this review"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Post comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
