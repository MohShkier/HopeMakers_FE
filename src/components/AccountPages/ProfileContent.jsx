import React, { useState } from "react";
import Modal from "./editModal";
import { useTheme } from "../../Context/ThemeContext";

const ProfileContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme(); // Access theme from the context

  return (
    <div
      className={`flex flex-col w-full p-6 justify-center items-center mb-14 lg:mb-0 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-lightBackground text-gray-800"
        }`}
      role="main" // ARIA main role for the content
    >
      <h1
        className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-500"
          }`}
        aria-label="Profile Page Title"
      >
        My Profile
      </h1>

      <div
        className={`shadow-md rounded-lg p-6 mb-6 w-full lg:w-2/3 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          }`}
        aria-labelledby="profile-section" // ARIA label for the section
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div
            className={`relative w-28 h-28 rounded-full border-2 ${theme === "dark" ? "border-blue-400" : "border-blue-500"
              } flex items-center justify-center group cursor-pointer`}
            aria-label="Upload Profile Image"
          >
            <i
              className={`fa-solid fa-camera text-xl pointer-events-none ${theme === "dark"
                  ? "text-blue-400 group-hover:text-blue-500"
                  : "text-blue-500 group-hover:text-blue-700"
                } transition-colors`}
              aria-hidden="true"
            ></i>
            <label htmlFor="photoFile" className="sr-only">Upload profile image</label>
            <input
              id="photoFile"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-describedby="upload-profile-image"
            />
            <div
              className={`absolute inset-0 rounded-full transition-all pointer-events-none ${theme === "dark"
                  ? "bg-blue-400 bg-opacity-10 group-hover:bg-opacity-20"
                  : "bg-blue-500 bg-opacity-10 group-hover:bg-opacity-20"
                }`}
            ></div>
          </div>
          <div className="flex-1 mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
            <h2 className="text-xl font-bold" aria-label="Username">{theme === "dark" ? "Username" : "Username"}</h2>
            <p className="text-sm mt-1 text-gray-500">User Role</p>
            <p className="text-sm mt-2 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <button
              className="px-6 py-2 rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setIsModalOpen(true)}
              aria-label="Edit Personal Info"
            >
              Edit Personal Info
            </button>
          </div>
        </div>
      </div>

      <Section
        title="Personal Information"
        fields={[
          { label: "First Name", value: "Mohammad" },
          { label: "Last Name", value: "Shgare" },
          { label: "Email", value: "something@gmail.com" },
          { label: "Phone", value: "+962 79 0000 000" },
          { label: "Bio", value: "Lorem Ipsum is simply dummy text..." },
        ]}
        onEdit={() => setIsModalOpen(true)}
      />

      <Section
        title="Address"
        fields={[
          { label: "Country", value: "Jordan" },
          { label: "City/State", value: "Amman, Northern structures" },
        ]}
        onEdit={() => setIsModalOpen(true)}
      />

      {/* Modal Component */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

const Section = ({ title, fields, onEdit }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`shadow-md rounded-lg p-4 mb-6 w-full lg:w-2/3 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        }`}
      aria-labelledby="section-title" // ARIA label for the section title
    >
      <div className="flex justify-between items-center" role="heading" aria-level="2">
        <h3 className="text-lg font-bold" id="section-title">{title}</h3>
        <button
          className={`hover:underline ${theme === "dark" ? "text-blue-400" : "text-blue-700"}`}
          onClick={onEdit}
          aria-label={`Edit ${title}`}
        >
          Edit
        </button>
      </div>
      <div className="mt-4 text-left" aria-labelledby="section-fields">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`flex justify-between border-b py-2 ${theme === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
          >
            <span className="font-bold">{field.label}</span>
            <span>{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;
