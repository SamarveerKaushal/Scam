import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from '../config';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${config.apiUrl}/verify`,
          {},
          { withCredentials: true }
        );
        if (!data.success) {
          navigate("/login");
        } else {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Dashboard verification error:', error);
        navigate("/login");
      }
    };
    verifyUser();
  }, [navigate]);

  return (
    <div className="dashboard_container">
      <h2>Welcome to Dashboard</h2>
      {user && (
        <div>
          <h3>User Details</h3>
          <p>Email: {user.email}</p>
          {/* Add more dashboard content here */}
        </div>
      )}
    </div>
  );
};

export default Dashboard; 