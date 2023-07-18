import Product from "./Product";

const ProductList = ({products, addItemToCart, selectedCategory}) => {
    return (
        <>
        <div className="features_items">
        {products.map(product => {
            return <Product product={product} key={product.id} addItemToCart={addItemToCart}></Product>
        })}
        </div>
        </>
    )
};

export default ProductList;