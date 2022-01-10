import { useState } from "react";

const Query = () => {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getReviews();
  // }, []);

  return (
    <div className="query">
      <h1>This is the dropdown + other querying tools</h1>
    </div>
  );
};

export default Query;
