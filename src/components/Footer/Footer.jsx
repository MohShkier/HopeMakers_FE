import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      {/* Top Section */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Logo and About */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl font-bold">Disability Support Platform</h1>
          <p className="text-sm mt-2">
            Empowering individuals with disabilities to access the tools, support, and resources they need.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/pages/profile" className="hover:underline">
                My Profile
              </a>
            </li>
            <li>
              <a href="/pages/settings" className="hover:underline">
                Settings
              </a>
            </li>
            <li>
              <a href="/pages/security" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="/pages/donate" className="hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center lg:text-right">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +962-79-000-0000</p>
          <div className="flex justify-center lg:justify-end mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-blue-400 pt-4 text-center text-sm">
        <p>&copy; 2024 Disability Support Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
