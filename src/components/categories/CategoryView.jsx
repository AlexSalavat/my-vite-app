import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import ProductsGrid from "../products/ProductsGrid";
import CategoryCard from "./CategoryCard";
import '../../styles/CategoryView.css';

const CategoryView = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Если выбран параметр категории — показываем товары этой категории
  if (category) {
    const categoryObj = categories.find(c => c.key === category);
    return (
      <div className="category-view">
        <h2>{categoryObj?.name || "Категория"}</h2>
        <ProductsGrid category={category} />
      </div>
    );
  }

  // Если категории нет — показываем сетку всех категорий
  return (
    <div className="category-view">
      <h2>Категории</h2>
      <div className="category-cards-grid">
        {categories.map(cat => (
          <CategoryCard
            key={cat.key}
            name={cat.name}
            image={cat.image}
            to={`/catalog/${cat.key}`}
            active={false}  // На главной нет выделения
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
