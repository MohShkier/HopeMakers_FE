import React, { useState } from "react";

const SecurityPage = () => {
  const [loginActivities, setLoginActivities] = useState([
    {
      device: "Samsung S24 Ultra",
      location: "Amman, Jordan",
      timestamp: "2024-12-05 12:00 PM",
    },
    {
      device: "Infinix Hot 30i",
      location: "Jbeil, Lebanon",
      timestamp: "2024-12-04 10:30 AM",
    },
  ]);

  // Toggle 2FA setting


  return (
    <div className="flex flex-col w-full p-6 justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Security</h1>

      {/* Change Password Section */}
      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Change Password</h2>
       <form>
       <div className="mt-4">
          <label htmlFor="oldpassword" className="block font-medium mb-1">Old Password</label>
          <input
            type="password"
            id="oldpassword"
            className="w-full border p-2 rounded dark:bg-darkBg dark:text-darkText"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="newpassword" className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            id="newpassword"
            className="w-full border p-2 rounded dark:bg-darkBg dark:text-darkText"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="confirmnewpassword" className="block font-medium mb-1">Confirm New Password</label>
          <input
            type="password"
            id="confirmnewpassword"
            className="w-full border p-2 rounded dark:bg-darkBg dark:text-darkText"
          />
        </div>
       </form>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Enable/Disable 2FA Section */}
      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Two-Factor Authentication (2FA)</h2>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Enable 2FA
          </button>
        </div>
      </div>

      {/* Recent Login Activities Section */}
      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Recent Login Activities</h2>
        <div className="mt-4">
          <ul>
            {loginActivities.map((activity, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span className="!text-left">{activity.device}</span>
                <span>{activity.location}</span>
                <span>{activity.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Logout From Other Devices</h2>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Logout From All Device
          </button>
        </div>
      </div>

      {/* Logout from Other Devices Section */}
      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Delete Your Account</h2>
        <div className="mt-4">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Security Tips Section */}
      <div className="bg-white dark:bg-darkBg shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-darkText">Security Tips</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700 dark:text-darkText">
          <li>Use a strong, unique password for each account.</li>
          <li>Enable Two-Factor Authentication (2FA) for added security.</li>
          <li>Monitor your login activity regularly.</li>
          <li>Avoid using public Wi-Fi networks for sensitive actions.</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityPage;
