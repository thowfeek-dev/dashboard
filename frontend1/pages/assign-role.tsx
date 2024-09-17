import { useEffect, useState } from 'react';
import { checkAdmin } from '../lib/auth';
import axios from 'axios';

const AssignRole = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [role, setRole] = useState('member');

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

  const handleAssignRole = async () => {
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:3001/api/role/assign-role',
      { userId: selectedUser, role },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    alert('Role assigned successfully');
  };

  return (
    <div>
      <h1>Assign Role</h1>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user: { _id: string; username: string }) => (
          <option key={user._id} value={user._id}>{user.username}</option>
        ))}
      </select>

      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleAssignRole}>Assign Role</button>
    </div>
  );
};

export default AssignRole;
