import { Bell, ChevronDown, Dice1, Menu, Search, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface UserProfile {
  name: string;
  avatar: string;
  role: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const [isMobileSearchVisible, setIsMobileSearchVisible] =
    useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Dashboard", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Teams", href: "#" },
    { label: "Reports", href: "#" },
  ];

  //sample user data
  const userProfile: UserProfile = {
    name: "John Doe",
    avatar: "api/placeholder/32/32",
    role: "Project Manager",
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">TaskFlow</span>
          </div>
          {/*Search bar swction*/}
          <div className="hidden md:block flex-1 max-w-md ml-8">
            <div className="relative">
              {/*Searh Icon position ke liye */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm"
                placeholder="Search tasks..."
              />
            </div>
          </div>
          {/* Navigation Links desktop
using map for repeated elements to keep code DRY*/}
          <div className="hidden md:flex items-center space-x-4">
            {/* Map through navigation items
                key prop is required by React for list rendering optimization */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-indgo-600 px-3 py-2
                        rounder-md text-sm font-medium
                        transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            {/* Notification Bell Button
                Strategy Note: Use relative/absolute positioning for badges */}
            <button className="text-gray-500 hover:text-indigo-600 relative">
              <Bell className="h-6 w-6" />
              {/*notification badge */}
              <span
                className="absolute top-0 right-0 block h-2 w-2
                            rounded-full bg-red-400 ring-2 ring-white"
              />
            </button>
            {/* Profile Dropdown
                Strategy Note: Use state to toggle dropdown visibility */}
            <div className="relative ml-3">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700
                        hover:text-indigo-600"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={userProfile.avatar}
                  alt={userProfile.name}
                />
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Dropdown Menu
                  Only rendered when isProfileOpen is true */}
              {isProfileOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg
                                py-1 bg-whie ring-1 ring-black ring-opacity-5 z-50"
                >
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm text-gray-700
                                            hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700
                                            hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#signout"
                    className="block px-4 py-2 text-sm text-gray-700
                                            hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
         {/* Mobile Controls
              Strategy Note: Create separate mobile controls for better UX */}
        <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button
            onClick={()=> setIsMobileSearchVisible(!isMobileSearchVisible)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-400
                       hover:bg-gray-200 focus:outline-none focus:ring-2
                       focus:ring-inset focus:ring-indigo-500"
                aria-label="Toggle search"
            >
                    <Search className="h-6 w-6"/>
            </button>
            {/*Mobile view toggle*/}
            <button
            onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-400 
                       hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                       focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggel"
            >
            {isMobileMenuOpen ?(<X className="h-6 w-6"/>)
                        :
            (<Menu className="h-6 w-6"/>)}
            </button>
            </div> 
        </div>
      </div>
{/* Mobile Search Bar
          Strategy Note: Place mobile-specific elements outside main navbar 
          for better organization */}
      {isMobileSearchVisible && (
        <div className="md:hidden border-t border-gray-200 p-2"
        >
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center
                            pointer-events-none">
                                <Search className="h-5 2-5 text-gray-400"/>

                            </div>
            <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300
                        rounded-md leading-5 bg-white placeholder-gray-500
                        focus:outline-none focus:ring-1 focus:ring-indigo-500
                        focus:border-indigo-500 text-sm"
            
            placeholder="Search tasks.."/>


        </div>
        </div>
      )}
        {/* Mobile Menu
          Strategy Note: Keep mobile menu separate from desktop navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
                {navItems.map((item)=>(
                    <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 rounder-md text-base font-medium text-gray-700 hover:text-gray-900"

                    >
                        {item.label}
                    </a>
                ))}

            </div>
          )}
    </nav>
  );
};

export default Navbar;
