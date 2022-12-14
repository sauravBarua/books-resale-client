import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const { category } = location.state;
  console.log(category);

  useEffect(() => {
    fetch(`https://roducts-resale-server.vercel.app/categories?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [category?.categories]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {categories.length > 0 ? (
        categories.map((category) => (
          <CategoryCard key={category.id} data={category}></CategoryCard>
        ))
      ) : (
        <h4 className="text-center m-5"> No category were added!</h4>
      )}
    </div>
  );
};

export default Category;
