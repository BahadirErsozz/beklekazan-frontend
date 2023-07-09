import Product from "./Product";

const ProductList = ({products}) => {
    return (
        <>
       <table>
    <thead>
        <tr>
            <th colSpan="2">Ürünler</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>İsim</td>
            <td>Fiyat</td>
            <td>Son tarih</td>
        </tr>
    
        {products?.map(product => {
            return <Product product={product} key={product.id}/>
        })}
        </tbody>
    </table>
        </>
    )
};

export default ProductList;