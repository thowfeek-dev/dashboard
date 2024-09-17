import axios from 'axios';

export const checkAdmin = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const response = await axios.get('http://localhost:3001/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.role === 'admin';
  } catch (err) {
    return false;
  }
};
