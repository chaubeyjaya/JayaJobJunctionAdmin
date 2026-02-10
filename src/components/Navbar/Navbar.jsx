// "use client"
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// const AdminNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = () => {
//     // Implement logout logic here
//     console.log('Logging out...');
//     // Example: Clear tokens and redirect
//     // localStorage.removeItem('adminToken');
//     // router.push('/admin/login');
//   };

//   // Check if current route matches the nav link
//   const isActive = (path) => router.pathname === path;

//   return (
//     <nav className="bg-gray-800 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo/Brand */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link href="/admin/dashboard" className="text-xl font-bold hover:text-gray-300 transition-colors">
//                 JobJunction Admin
//               </Link>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:block ml-10">
//               <div className="flex space-x-4">
//                 <Link
//                   href="/companydetail"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/admin/companies') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   Companies
//                 </Link>
//                 <Link
//                   href="/jobapplication"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/jobapplication') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                 Job
//                 </Link>
//                 <Link
//                   href="/resourcespage"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/resourcespage') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   Resource
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Logout Button */}
//           <div className="hidden md:block">
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//             >
//               Logout
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               href="/admin/companies"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/admin/companies') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               Companies
//             </Link>
//             <Link
//               href="/admin/applicants"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/admin/applicants') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               Applicants
//             </Link>
//             <Link
//               href="/admin/history"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/admin/history') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               History
//             </Link>
//             <button
//               onClick={() => {
//                 handleLogout();
//                 setIsOpen(false);
//               }}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default AdminNavbar;


//remove logout button
// "use client"
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// const AdminNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Check if current route matches the nav link
//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="bg-gray-800 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo/Brand */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link href="/admin/dashboard" className="text-xl font-bold hover:text-gray-300 transition-colors">
//                 JobJunction Admin
//               </Link>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:block ml-10">
//               <div className="flex space-x-4">
//                 <Link
//                   href="/companydetail"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/companydetail') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   Companies
//                 </Link>
//                 <Link
//                   href="/jobapplication"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/jobapplication') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   Job
//                 </Link>
//                 <Link
//                   href="/resourcespage"
//                   className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors ${
//                     isActive('/resourcespage') ? 'bg-gray-900 text-white' : 'text-gray-300'
//                   }`}
//                 >
//                   Resource
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               href="/companydetail"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/companydetail') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               Companies
//             </Link>
//             <Link
//               href="/jobapplication"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/jobapplication') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               Job
//             </Link>
//             <Link
//               href="/resourcespage"
//               className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
//                 isActive('/resourcespage') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               Resource
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default AdminNavbar;



//change the style of  navbar
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
      { name: 'Home', href: '/' },
    { name: 'Companies', href: '/companydetail' },
    { name: 'Jobs', href: '/jobapplication' },
    { name: 'Resources', href: '/resourcespage' },
    { name: 'User', href: '/usercontact' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/admin/dashboard" className="group flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                JobJunction <span className="text-indigo-500">Admin</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive(link.href) 
                      ? 'text-white bg-gray-800 shadow-inner' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                  {/* Animated Active Indicator */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-900 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;