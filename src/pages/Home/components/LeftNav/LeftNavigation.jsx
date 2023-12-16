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
          <LeftNavigationItem
            title={"AraçBakim"}
            text={"Araç Bakım"}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            products={products}
            updateProductCounts={updateProductCounts}
          ></LeftNavigationItem>
          <LeftNavigationItem
            title={"Sebze"}
            text={"Sebze"}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            products={products}
            updateProductCounts={updateProductCounts}
          ></LeftNavigationItem>
          <LeftNavigationItem
            title={"Meyve"}
            text={"Meyve"}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            products={products}
            updateProductCounts={updateProductCounts}
          ></LeftNavigationItem>
        </div>
      </div>
    </>
  );
};

export default LeftNavigation;
