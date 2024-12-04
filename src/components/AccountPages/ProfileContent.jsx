const ProfileContent = () => {
    return (
      <div className="flex flex-col !w-full p-6 !justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">My Profile</h1>
        
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full lg:w-2/3">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <i className="fa-solid fa-camera text-blue-500"></i>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Username</h2>
              <p className="text-gray-500">User Role</p>
              <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text...</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Edit
          </button>
        </div>
        
        {/* Personal Information Section */}
        <Section
          title="Personal Information"
          fields={[
            { label: "First Name", value: "Mohammad" },
            { label: "Last Name", value: "Shgare" },
            { label: "Email", value: "something@gmail.com" },
            { label: "Phone", value: "+962 79 0000 000" },
            { label: "Bio", value: "Lorem Ipsum is simply dummy text..." },
          ]}
        />
        
        {/* Address Section */}
        <Section
          title="Address"
          fields={[
            { label: "Country", value: "Jordan" },
            { label: "City/State", value: "Amman, Northern structures" },
          ]}
        />
      </div>
    );
  };
  
  const Section = ({ title, fields }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-6  w-full lg:w-2/3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
        <div className="mt-4 !text-left">
          {fields.map((field, index) => (
            <div key={index} className="flex justify-between  border-b py-2">
              <span className="font-bold">{field.label}</span>
              <span>{field.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileContent;
  