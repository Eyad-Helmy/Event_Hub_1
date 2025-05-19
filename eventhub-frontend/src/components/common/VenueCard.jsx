import { Link } from 'react-router-dom';

export default function VenueCard({ venue }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {venue.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {venue.location}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">
            Capacity: {venue.capacity}
          </span>
          <Link 
            to={`/venues/${venue.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}