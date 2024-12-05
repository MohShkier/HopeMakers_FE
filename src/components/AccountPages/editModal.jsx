import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "auto";
    }
    
    // Clean up overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Edit Personal Information</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="firstName" className="block font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border border-gray-300 rounded p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border border-gray-300 rounded p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block font-medium mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full border border-gray-300 rounded p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;





