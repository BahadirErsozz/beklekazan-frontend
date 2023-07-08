import User from "./User";

const UserList = ({users, addItemToCart, selectedCategory}) => {
    return (
        <>
       <table>
    <thead>
        <tr>
            <th colSpan="2">Kullanıcılar</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Email</td>
            <td>Kayıt Tarihi</td>
        </tr>
    
        {users?.map(user => {
            if(selectedCategory === "All" || user.category === selectedCategory)
                return <User user={user} key={user.id} addItemToCart={addItemToCart}/>
        })}
        </tbody>
    </table>
        </>
    )
};

export default UserList;