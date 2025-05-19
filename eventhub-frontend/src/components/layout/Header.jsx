import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authcontext';
import Button from '../common/Button';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardText = () => {
    if (!user) return '';
    const roleMap = {
      attendee: 'Attendee',
      organizer: 'Organizer',
      venue_admin: 'Venue Admin',
      system_admin: 'System Admin'
    };
    return `${roleMap[user.active_role]} Dashboard`;
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          EventHub
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200">Home</Link>
          <Link to="/events" className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200">Events</Link>
          <Link to="/venues" className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200">Venues</Link>
          
          {user && (
            <>
              <Link to="/profile" className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200">Profile</Link>
              <Link to="/dashboard" className="px-4 py-2 rounded-md hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-200">
                {getDashboardText()}
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <Button 
              onClick={handleLogout} 
              variant="outline"
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-600 transition-all duration-200"
            >
              Log Out
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button 
                  variant="outline"
                  className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  className="hover:bg-blue-700 transition-all duration-200"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}