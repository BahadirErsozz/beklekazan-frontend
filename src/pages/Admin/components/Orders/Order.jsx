import { useState } from "react"

const Order = ({order}) => {
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
            <td><input type="text" defaultValue={order.email}></input></td>
            <td><input type="text" defaultValue={order.address_details}></input></td>
            <td><input type="text" defaultValue={order.order_status}></input></td>
            <td>{order.created_at}</td>
        </tr>
        </>
    )
};

export default Order;