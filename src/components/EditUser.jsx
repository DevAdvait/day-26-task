import { useState, useEffect } from 'react';

const EditUser = () => {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://631072be36e6a2a04eee964f.mockapi.io/UserData')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://631072be36e6a2a04eee964f.mockapi.io/UserData${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age, city }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setMessage('User updated successfully!');
                } else {
                    setMessage('Error updating user');
                }
            })
            .catch(error => {
                console.log(error);
                setMessage('Error updating user');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center m-5">
            <label>
                User ID:
                <select value={userId} onChange={e => setUserId(e.target.value)}>
                    <option value="">Select ID</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.id}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Age:
                <input type="text" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            <br />
            <label>
                City:
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
            </label>
            <br />
            <button type="submit" disabled={!userId} className="btn btn-primary col-3">Edit User</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default EditUser;
