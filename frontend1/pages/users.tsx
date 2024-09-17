import { useEffect, useState } from 'react';
import { checkAdmin } from '../lib/auth';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const isAdmin = await checkAdmin();
      if (!isAdmin) {
        alert('Access denied');
        window.location.href = '/';
        return;
      }

      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
