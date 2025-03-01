// app/details/page.tsx
import Link from 'next/link';

interface EventDetail {
  date: string;
  time: string;
  location: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
}

interface ScheduleItem {
  time: string;
  activity: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Details() {
  // Event details
  const eventDetails: EventDetail = {
    date: 'Sunday, March 22, 2025',
    time: '14:00 PM - 5:00 PM',
    location: 'Acts Christian Church (South Campus)',
    address: '241 Pretorius Rd, Vorna Valley, Midrand, 1685',
    contactEmail: 'funday@vmtcompany.com',
    contactPhone: '(079) 164-5874'
  };
  
  // Event schedule - updated to match the new times
  const schedule: ScheduleItem[] = [
    { time: '14:00 PM', activity: 'Check-in & Welcome Refreshments' },
    { time: '14:30 PM', activity: 'Opening Remarks & Team Assignments' },
    { time: '15:00 PM', activity: 'Group Activities Begin' },
    { time: '16:00 PM', activity: 'Refreshments & Networking' },
    { time: '16:30 PM', activity: 'Awards & Recognitions' },
    { time: '17:00 PM', activity: 'Event Concludes' }
  ];
  
  // FAQs
  const faqs: FAQ[] = [
    {
      question: "What should I bring?",
      answer: "Comfortable clothes, sunscreen, a hat, and a refillable water bottle. We&apos;ll provide everything else"
    },
    {
      question: "Is parking available?",
      answer: "Yes, free parking is available at the venue. We also encourage carpooling."
    },
    {
      question: "What if it rains?",
      answer: "The event will proceed rain or shine. In case of severe weather, we have indoor facilities available."
    },
    {
      question: "Will food be provided?",
      answer: "Yes, refreshments will be provided throughout the event."
    }
  ];
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 md:p-24">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 gradient-text text-center">
        VMT Fun Day Details
      </h1>
      
      <div className="w-full max-w-4xl">
        {/* Event Information Card */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-6 mb-8">
          <div className="p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Event Information</h2>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="inline-block w-6 mr-2">📅</span>
                    <span><strong>Date:</strong> {eventDetails.date}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-6 mr-2">⏰</span>
                    <span><strong>Time:</strong> {eventDetails.time}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-6 mr-2">📍</span>
                    <span>
                      <strong>Location:</strong><br />
                      {eventDetails.location}<br />
                      {eventDetails.address}
                    </span>
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-pink-400">Contact Information</h2>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="inline-block w-6 mr-2">📧</span>
                    <span><strong>Email:</strong> {eventDetails.contactEmail}</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-6 mr-2">📞</span>
                    <span><strong>Phone:</strong> {eventDetails.contactPhone}</span>
                  </p>
                  <p className="mt-4 text-gray-300">
                    If you have any questions or special requests, please don&apos;t hesitate to contact the Fun Day planning committee.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Link 
                href="/rsvp" 
                className="btn-primary"
              >
                RSVP Now
              </Link>
            </div>
          </div>
        </div>
        
        {/* Schedule */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Event Schedule</h2>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className={`flex border-l-4 ${
                  index % 2 === 0 ? 'border-blue-400' : 'border-pink-400'
                } pl-4 py-2`}
              >
                <div className="font-semibold w-28 text-gray-300">{item.time}</div>
                <div className="flex-1 text-white">{item.activity}</div>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-sm text-gray-400 italic">
            * Schedule is subject to minor changes. Final schedule will be provided at check-in.
          </p>
        </div>
        
        {/* FAQs */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-pink-400">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg mb-2 text-white">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-pink-600 rounded-lg p-6 text-white text-center mb-8">
          <h2 className="text-2xl font-semibold mb-3">Ready to join us?</h2>
          <p className="mb-6">Don&apos;t miss out on all the fun! RSVP today and be part of this exciting event.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/rsvp" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors duration-200"
            >
              RSVP Now
            </Link>
            <Link 
              href="/" 
              className="border border-white hover:bg-white/10 font-semibold py-2 px-6 rounded-md transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}