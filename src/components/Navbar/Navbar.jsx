"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
    // Example: Clear tokens and redirect
    // localStorage.removeItem('adminToken');
    // router.push('/admin/login');
  };

  // Check if current route matches the nav link
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/admin/dashboard" className="text-xl font-bold hover:text-gray-300 transition-colors">
                JobJunction Admin
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link
                  href="/companydetail"
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
                    isActive('/admin/companies') ? 'bg-gray-900 text-white' : 'text-gray-300'
                  }`}
                >
                  Companies
                </Link>
                <Link
                  href="/jobapplication"
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
                    isActive('/jobapplication') ? 'bg-gray-900 text-white' : 'text-gray-300'
                  }`}
                >
                Job
                </Link>
                <Link
                  href="/admin/history"
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
                    isActive('/admin/history') ? 'bg-gray-900 text-white' : 'text-gray-300'
                  }`}
                >
                  History
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Logout Button */}
          <div className="hidden md:block">
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/admin/companies"
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive('/admin/companies') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Companies
            </Link>
            <Link
              href="/admin/applicants"
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive('/admin/applicants') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Applicants
            </Link>
            <Link
              href="/admin/history"
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                isActive('/admin/history') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              History
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;