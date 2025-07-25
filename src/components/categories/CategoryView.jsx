// src/components/categories/CategoryView.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import ProductsGrid from "../products/ProductsGrid";
import CategoryCard from "./CategoryCard";
import '../../styles/CategoryView.css';

const CategoryView = () => {
  const { category } = useParams();

  if (!category) {
    return (
      <div className="category-view">
        <h2>Категории</h2>
        <div className="category-cards-grid">
          {categories.map(cat => (
            <CategoryCard
              key={cat.key}
              name={cat.name}
              image={cat.image}
              to={`/category/${cat.key}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="category-view">
      <h2>{categories.find(c => c.key === category)?.name}</h2>
      <ProductsGrid />
    </div>
  );
};

export default CategoryView;
