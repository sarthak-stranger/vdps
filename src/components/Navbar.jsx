// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
// import {Link} from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-purple-600 to-orange-400 text-white">
//       <div className="container mx-auto flex justify-between items-center py-1 md:py-4 px-8 md:px-16">
//         <div className="hidden md:flex space-x-4 gap-7 font-semibold">
//           <Link to="/" className="text-white hover:text-gray-300">Home</Link>
//           <Link to="#birthday" className="text-white hover:text-gray-300">Birthdays</Link>
//           <Link to="/faculty" className="text-white hover:text-gray-300">Faculty</Link>
//           <Link to="/admissions" className="text-white hover:text-gray-300">Admissions</Link>
//           <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
//           <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white hover:text-gray-300 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {(ref) => (
//           <div className="md:hidden" id="mobile-menu">
//             <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Home</Link>
//               <Link to="#birthday" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Birthdays</Link>
//               <Link to="/faculty" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Faculty</Link>
//               <Link to="/admissions" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Admissions</Link>
//               <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Gallery</Link>
//               <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Contact</Link>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-orange-400 text-white">
      <div className="container mx-auto flex justify-between items-center py-1 md:py-4 px-8 md:px-16">
        <div className="hidden md:flex space-x-4 gap-7 font-semibold">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/#birthday" className="text-white hover:text-gray-300">Birthdays</Link>
          <Link to="/faculty" className="text-white hover:text-gray-300">Faculty</Link>
          <Link to="/admissions" className="text-white hover:text-gray-300">Admissions</Link>
          <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Home</Link>
              <Link to="/#birthday" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Birthdays</Link>
              <Link to="/faculty" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Faculty</Link>
              <Link to="/admissions" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Admissions</Link>
              <Link to="/gallery" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Gallery</Link>
              <Link to="/contact" onClick={handleMenuClose} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Contact</Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
