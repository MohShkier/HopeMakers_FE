import React, { useState } from "react";

const SettingsPage = () => {
  const [language, setLanguage] = useState("en-US");
  const [theme, setTheme] = useState("light"); // light or dark mode
  const [notifications, setNotifications] = useState(true); // Email Notifications

  // Handle changes in language
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  // Toggle theme (light/dark mode)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark"); // Apply dark mode class to body
  };

  // Handle notifications preference
  const handleNotificationsChange = (e) => setNotifications(e.target.checked);

  return (
    <div className="flex flex-col !w-full p-6 !justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Settings</h1>

      {/* Language Settings Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800">Language Preferences</h2>
        <div className="mt-4">
          <label htmlFor="language" className="block font-medium mb-1">Select Language</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="w-full border p-2 rounded"
          >
            <option value="en-US">English (US)</option>
            <option value="de-DE">العربية (الأردن)</option>
            {/* Add other languages as needed */}
          </select>
        </div>
      </div>

      {/* Theme Section (Light/Dark Mode) */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800">Appearance</h2>
        <div className="mt-4 flex items-center">
          <label htmlFor="theme" className="mr-4">Dark Mode</label>
          <input
            type="checkbox"
            id="theme"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="toggle-checkbox"
          />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800">Notification Preferences</h2>
        <div className="mt-4 flex items-center">
          <label htmlFor="notifications" className="mr-4">Email Notifications</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={handleNotificationsChange}
            className="toggle-checkbox"
          />
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800">Account Settings</h2>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Manage your account settings here.</p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Edit Account Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
