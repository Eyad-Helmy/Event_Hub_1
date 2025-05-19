import './App.css'
import './index.css'
import { useAuth } from '../src/contexts/authcontext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-green-600">
            Tailwind is working!
          </h1>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Test Button
          </button>
          {/* <AuthTest /> */}
        </div>
      </main>
      <Footer />
    </div>
  )
}


//test component
function AuthTest() {
  const { user, loginUser, registerUser, logout } = useAuth();
  
  return (
    <div className="p-4 border rounded-lg space-y-2">
      <h3 className="font-bold">Auth Test</h3>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
            Logout
          </button>
        </>
      ) : (
        <>
          <button 
            onClick={() => loginUser("test@example.com", "password123")}
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
            Test Login
          </button>
          <button 
            onClick={() => registerUser("testuser", "test@example.com", "password123")}
            className="bg-green-500 text-white px-3 py-1 rounded">
            Test Register
          </button>
        </>
      )}
    </div>
  );
}
export default App