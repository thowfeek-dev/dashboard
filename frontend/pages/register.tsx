import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:3001/api/auth/register', { email, password });
      alert('Registration successful');
      router.push('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1 style={styles.title}>Register</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={styles.input}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          style={styles.input}
        />
        <button onClick={handleRegister} style={styles.button}>Register</button>
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
    backgroundColor: '#E8F5E9',
  },
  formBox: {
    padding: '40px',
    width: '400px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#fff',
    borderRadius: '10px',
    border: '1px solid #C8E6C9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#163853',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #B0BEC5',
    backgroundColor: '#F1F8E9',
    fontSize: '16px',
    color: '#4CAF50',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00BF63',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Register;
