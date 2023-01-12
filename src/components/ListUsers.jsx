import { useState, useEffect } from 'react';

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://631072be36e6a2a04eee964f.mockapi.io/UserData')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <table className='table m-3' >
            <thead >
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>City</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <th scope='row'>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListUsers;
