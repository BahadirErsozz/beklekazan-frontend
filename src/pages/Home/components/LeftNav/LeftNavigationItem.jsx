import { useEffect, useState } from "react";

const LeftNavigationItem = ({
  title,
  text,
  setSelectedCategory,
  selectedCategory,
  products,
}) => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    calculateProductCount();
  }, []);
  const calculateProductCount = () => {
    setProductCount(
      products.filter((element) => {
        return title == element.category || title == "All";
      }).length
    );
  };

  const setSelectedCategoryHandler = () => {
    setSelectedCategory(title);
  };
  return (
    <>
      <div
        style={{
          width: "auto",
          height: "5%",
          fontSize: selectedCategory == title ? "20px" : "16px",
          fontWeight: selectedCategory == title ? "bold" : "normal",
          padding: "5px 0",
          fontFamily: "Open-Sans",
          cursor: "pointer",
        }}
        onClick={setSelectedCategoryHandler}
      >
        {text} ({productCount})
      </div>
    </>
  );
};

export default LeftNavigationItem;
