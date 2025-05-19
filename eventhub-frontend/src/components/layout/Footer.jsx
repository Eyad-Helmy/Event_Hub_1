import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">EventHub</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-600 hover:text-blue-500">About Us</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-blue-500">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">For Attendees</h3>
            <div className="space-y-2">
              <Link to="/events" className="block text-gray-600 hover:text-blue-500">Browse Events</Link>
              <Link to="/how-it-works" className="block text-gray-600 hover:text-blue-500">How It Works</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">For Organizers</h3>
            <div className="space-y-2">
              <Link to="/create-event" className="block text-gray-600 hover:text-blue-500">Create Event</Link>
              <Link to="/pricing" className="block text-gray-600 hover:text-blue-500">Pricing</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">For Venues</h3>
            <div className="space-y-2">
              <Link to="/list-venue" className="block text-gray-600 hover:text-blue-500">List Your Venue</Link>
              <Link to="/venue-guidelines" className="block text-gray-600 hover:text-blue-500">Guidelines</Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} EventHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}