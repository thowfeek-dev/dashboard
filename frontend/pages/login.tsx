import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>Login</h1>
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
        <button onClick={handleLogin} style={styles.button}>Login</button>
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
  loginBox: {
    padding: '40px',
    width: '400px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#ffffff', 
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
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#007A3D', 
  },
};

export default Login;
