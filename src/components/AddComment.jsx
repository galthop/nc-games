import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utilis/api";

const AddComment = ({ setComments, setError }) => {
  const { review_id } = useParams();
  const [post, setPost] = useState("");

  const handleSubmit = () => {
    postComment(review_id, "jessjelly", post)
      .then((res) => {
        setComments((currentComments) => [
          ...currentComments,
          res.data.comment,
        ]);
      })
      .catch((err) => {
        setError(err);
      });
    setPost("");
  };

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
