const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <li key={category.category_id}>
        <h2>{category.slug}</h2>
        <p>{category.description}</p>
      </li>
    </div>
  );
};

export default CategoryCard;
