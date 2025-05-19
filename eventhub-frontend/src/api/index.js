const API_BASE = 'http://localhost:3000/api';

export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return await response.json();
  },

  register: async (userData) => {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return await response.json();
  },

  getProfile: async (token) => {
    const response = await fetch(`${API_BASE}/users/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
  }
};

export const eventAPI = {
  getEvents: async () => {
    const response = await fetch(`${API_BASE}/events`);
    return await response.json();
  },
  // Add more event-related API calls
};