import { useState, useEffect } from 'react';
import axios from 'axios';

const AssignRole = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3001/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId) => {
    try {
      await axios.post('http://localhost:3001/api/role/assign-role', { userId, role });
      alert('Role assigned successfully');
    } catch (error) {
      alert('Failed to assign role');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1 style={styles.title}>Assign Roles</h1>
        {users.map((user) => (
          <div key={user._id} style={styles.userCard}>
            <p>{user.email}</p>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
            <button onClick={() => handleRoleChange(user._id)} style={styles.button}>
              Assign Role
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FAFAFA',
  },
  formBox: {
    padding: '40px',
    width: '500px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#163853',
    fontWeight: '600',
  },
  userCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #B0BEC5',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#00BF63',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AssignRole;
