
import Link from "next/link";

const NotFound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link href="/" className="text-slate-800 hover:text-slate-600 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;