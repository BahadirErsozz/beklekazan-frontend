import Order from "./Order";

const OrderList = ({orders}) => {
    return (
        <>
       <table>
    <thead>
        <tr>
            <th colSpan="2">Siparişler</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Email</td>
            <td>Adres</td>
            <td>Sipariş Durumu</td>
        </tr>
    
        {orders?.map(order => {
            return <Order order={order} key={order.id}/>
        })}
        </tbody>
    </table>
        </>
    )
};

export default OrderList;