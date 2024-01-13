import { useState, useEffect } from "react";

import LeftNavigationItem from "./LeftNavigationItem";

const LeftNavigation = ({
  updateProductCounts,
  products,
  setSelectedCategory,
  selectedCategory,
}) => {
  const setSelectedCategoryHandler = () => {
    setSelectedCategory("All");
  };
  const categories = [];
  return (
    <>
      <div
        style={{
          minWidth: "275px",
          maxWidth: "275px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "8px",
          marginRight: "8px",
          border: "1px solid #dcdcdc",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            paddingBottom: "5px",
            borderBottom: "1px solid #dcdcdc",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Arama
          </div>
          <div>{products.length} ürün</div>
        </div>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontSize: selectedCategory == "All" ? "20px" : "16px",
              fontWeight: selectedCategory == "All" ? "bold" : "normal",
              marginBottom: "16px",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={setSelectedCategoryHandler}
          >
            Tüm Kategoriler ({products.length})
          </div>
          {products.map((product) => {
            if (!categories.includes(product.category)) {
              categories.push(product.category);
              return (
                <LeftNavigationItem
                  key={product.id}
                  title={product.category}
                  text={product.category}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  products={products}
                  updateProductCounts={updateProductCounts}
                ></LeftNavigationItem>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default LeftNavigation;
