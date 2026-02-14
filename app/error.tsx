"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f1] text-center px-6">
      
      {/* Title */}
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        Oops!
      </h1>

      {/* Message */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Something went wrong.
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        An unexpected error occurred. Please try again or go back to the homepage.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        
        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="bg-[#b88a2d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a67925] transition"
        >
          Try Again
        </button>

        {/* Home Button */}
        <Link
          href="/"
          className="border border-[#b88a2d] text-[#b88a2d] px-6 py-3 rounded-full font-medium hover:bg-[#b88a2d] hover:text-white transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
