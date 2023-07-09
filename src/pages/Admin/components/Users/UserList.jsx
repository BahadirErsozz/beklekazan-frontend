import User from "./User";

const UserList = ({users}) => {
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
                return <User user={user} key={user.id}/>
        })}
        </tbody>
    </table>
        </>
    )
};

export default UserList;