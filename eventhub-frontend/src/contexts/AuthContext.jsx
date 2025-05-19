import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authAPI.getProfile(token)
        .then(response => {
          if (response.success) {
            setUser({
              ...response.user,
              active_role: response.user.role
            });
          }
        })
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const response = await authAPI.login(email, password);
    if (!response.success) {
      throw new Error('Login failed');
    }
    const { token, user } = response;
    const userWithActiveRole = {
      ...user,
      active_role: user.role
    };
    localStorage.setItem('token', token);
    setUser(userWithActiveRole);
  };

  const register = async (username, email, password, role) => {
    const response = await authAPI.register({ username, email, password, role });
    if (!response.success) {
      throw new Error('Registration failed');
    }
    const { token, user } = response;
    const userWithActiveRole = {
      ...user,
      active_role: user.role
    };
    localStorage.setItem('token', token);
    setUser(userWithActiveRole);
  };

  const switchRole = async (role) => {
    const response = await authAPI.switchRole(role);
    if (!response.success) {
      throw new Error('Failed to switch role');
    }
    const { token } = response;
    localStorage.setItem('token', token);
    setUser(prevUser => ({
      ...prevUser,
      active_role: role
    }));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}