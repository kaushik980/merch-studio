import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f1] text-center px-6">
      
      <h1 className="text-6xl font-bold text-[#b88a2d] mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-[#b88a2d] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a67925] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
