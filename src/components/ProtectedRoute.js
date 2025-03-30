import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const location = useLocation();
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/verify-token`, {
          withCredentials: true,
          timeout: 10000
        });
        
        if (response.data.success) {
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('user');
          toast.error('Authentication failed. Please login again.', {
            position: 'top-right'
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, RETRY_DELAY);
          return;
        }

        toast.error('Unable to verify authentication. Please login again.', {
          position: 'top-right'
        });
        setIsAuthenticated(false);
        localStorage.removeItem('user');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [retryCount]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 