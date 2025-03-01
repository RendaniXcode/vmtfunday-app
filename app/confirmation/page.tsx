'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Friend';
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 text-center">
      <div className="form-container max-w-2xl">
        <div className="mb-6">
          <span className="inline-block p-3 rounded-full bg-green-800 text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Thanks, {name}!
        </h1>
        
        <p className="text-xl text-gray-300 mb-6">
          Your RSVP has been successfully submitted. We&apos;re excited to see you at the VMT Fun Day!
        </p>
        
        <div className="bg-blue-900/30 p-4 rounded-lg mb-8 border border-blue-700">
          <h2 className="font-semibold text-blue-400 mb-2">What&apos;s Next?</h2>
          <p className="text-blue-300">
            You&apos;ll receive a confirmation email with all the details about the event. Make sure to check your inbox!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Link 
            href="/" 
            className="btn-primary"
          >
            Return to Home
          </Link>
          
          <Link 
            href="/details" 
            className="btn-secondary"
          >
            Event Details
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Confirmation() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 text-center">
        <div className="animate-pulse">
          <p className="text-xl text-gray-300">Loading confirmation...</p>
        </div>
      </main>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}