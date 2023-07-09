import { useState } from "react"

const Product = ({product}) => {
    const [email, setEmail] = useState('');
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    return (
        <>
            <tr>
            <td><input type="text" defaultValue={product.name}></input></td>
            <td><input type="text" defaultValue={product.price}></input></td>
            <td><input type="text" defaultValue={product.deadline}></input></td>
            <td>{product.created_at}</td>
        </tr>
        </>
    )
};

export default Product;