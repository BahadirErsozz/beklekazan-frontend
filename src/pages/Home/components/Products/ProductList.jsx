import Product from "./Product";

const ProductList = ({products, addItemToCart, selectedCategory}) => {
    return (
        <>
       <div style={{width: "100%", height: "100%", borderStyle: "", borderWidth: "5px", borderColor: "#dcdcdc", marginRight: "0px", display: "flex", flexWrap: "wrap", alignContent: "flex-start", maxWidth: "931px"}}>
        {products.map(product => {
            if(selectedCategory === "All" || product.category === selectedCategory)
                return <Product product={product} key={product.id} addItemToCart={addItemToCart}></Product>
        })}
        </div>
        </>
    )
};

export default ProductList;