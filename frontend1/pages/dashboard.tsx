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
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <a href="/calculation">Go to Calculation Page</a>
        </li>
        {isAdmin && (
          <>
            <li>
              <a href="/users">View Registered Users</a>
            </li>
            <li>
              <a href="/assign-role">Assign Roles</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
