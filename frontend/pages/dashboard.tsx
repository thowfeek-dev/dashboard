import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkAdmin } from '../lib/auth';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      const adminStatus = await checkAdmin();
      setIsAdmin(adminStatus);
    };

    checkUserRole();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <a style={styles.link} href="/calculation">Go to Calculation Page</a>
        </li>
        {isAdmin && (
          <>
            <li style={styles.listItem}>
              <a style={styles.link} href="/users">View Registered Users</a>
            </li>
            <li style={styles.listItem}>
              <a style={styles.link} href="/assign-role">Assign Roles</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
  },
  link: {
    fontSize: '1.2rem',
    color: '#0070f3',
    textDecoration: 'none',
  },
};

export default Dashboard;
