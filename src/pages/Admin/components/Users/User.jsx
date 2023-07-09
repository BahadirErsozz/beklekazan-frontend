import { useState } from "react"

const User = ({user}) => {
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
            <td><input type="text" defaultValue={user.email}></input></td>
            <td>{user.created_at}</td>
        </tr>
        </>
    )
};

export default User;