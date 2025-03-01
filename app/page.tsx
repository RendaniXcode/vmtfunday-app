import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 text-center">
      <div className="relative flex place-items-center mb-8">
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
        VMT Fun Day 2025
      </h1>
      
      <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white">
        Join us for a day of fun, food, and fantastic activities with your colleagues!
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Link 
          href="/rsvp" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
        >
          RSVP Now
        </Link>
        <Link 
          href="/details" 
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
        >
          Event Details
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl text-left">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">When</h2>
          <p className="text-gray-300">
            Saturday, June 12, 2025<br />
            10:00 AM - 4:00 PM
          </p>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Where</h2>
          <p className="text-gray-300">
            Central Park Recreation Area<br />
            123 Park Avenue<br />
            New York, NY 10001
          </p>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-purple-400">What</h2>
          <p className="text-gray-300">
            Games, BBQ lunch, team building activities, prizes, and much more!
          </p>
        </div>
      </div>
    </main>
  );
}