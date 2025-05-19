import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {event.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(event.date).toLocaleDateString()}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">
            {event.price > 0 ? `$${event.price}` : 'Free'}
          </span>
          <Link 
            to={`/events/${event.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}