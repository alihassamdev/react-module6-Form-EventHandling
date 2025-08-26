import { useEffect, useState } from 'react';

import './Users.css'

const Users = () => {

    const [usersData, setUsersData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {

            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('Error: cannot conect to network');
                }

                const data = await response.json();

                setUsersData(data.slice(0, 9));
            }
            catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();

    }, []);

    return (
        <div className='container '>
            <h1>Users </h1>
            <div className='users-container'>
                {isLoading
                    ? // Show 9 skeletons
                    Array.from({ length: 9 }).map((_, i) => (
                        <div className="card" key={i}>
                            <div className="skeleton short"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div>
                    ))
                    : // Show actual users
                    usersData.map((user) => (
                        <div className="card" key={user.id}>
                            <h3 className='name'>{user.name}</h3>
                            <p className='username'>@{user.username}</p>
                            <p className='info'>📞 {user.phone}</p>
                            <a className='website' href={`https://${user.website}`} target="_blank" rel="noreferrer">
                                🌐 {user.website}
                            </a>
                        </div>
                    ))}
            </div>
        </div>

    )
}

export default Users