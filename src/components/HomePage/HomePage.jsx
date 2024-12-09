import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLanguage } from '../../Context/LanguageContext';
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  const { language, changeLanguage } = useLanguage();
  const data = {
    labels: ['Normal People', 'Disabled People'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#93C5FD', '#2563EB'], // Light Blue, Dark Blue
        hoverBackgroundColor: ['#3B82F6', '#1E40AF'], // Hover Colors
      },
    ],
  };

  const data2 = {
    labels: ['Normal People', 'Disabled People'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#F87171', '#10B981'], // Light Red, Green
        hoverBackgroundColor: ['#DC2626', '#047857'], // Hover Colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <>
    <div className="!w-full" dir={language === "en" ? "ltr" : "rtl"}>


    <section className="relative bg-cover aspect-[16/9] lg:aspect-auto bg-center bg-no-repeat text-center text-white py-20 lg:py-40"  style={{ backgroundImage: "url('/bg.jpg')" }}>
  <div className="bg-black bg-opacity-35 absolute inset-0 z-0"></div>
  <div className="relative z-10 flex flex-col items-center">
    <h1 className="text-4xl lg:text-6xl font-bold mb-4">Empowering People with Disabilities</h1>
    <p className="text-lg lg:text-xl mb-6">Together, we can make a difference.</p>
    <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-bold transition-colors">
      Get Started
    </button>
  </div>
</section>


<section className="py-20 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
      Why Disabled People ?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Chart for Disabled Percentage Over the World */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">
          Disabled Percentage Over the World
        </h2>
        <div className="flex justify-center">
          <div className="w-72 h-72">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>

      {/* Chart for Disabled Percentage in Jordan */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">
          Disabled Percentage in Jordan
        </h2>
        <div className="flex justify-center">
          <div className="w-72 h-72">
            <Pie data={data2} options={options} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-lightBackground dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
          <i className="fa-solid fa-user-plus text-3xl"></i>
        </div>
        <h3 className="font-bold text-xl">Step 1: Sign Up</h3>
        <p className="text-gray-600 dark:text-gray-400">Create your account to get started.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
          <i className="fa-solid fa-hand-holding-heart text-3xl"></i>
        </div>
        <h3 className="font-bold text-xl">Step 2: Explore Needs</h3>
        <p className="text-gray-600 dark:text-gray-400">Browse cases and decide how to help.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
          <i className="fa-solid fa-check-circle text-3xl"></i>
        </div>
        <h3 className="font-bold text-xl">Step 3: Make a Difference</h3>
        <p className="text-gray-600 dark:text-gray-400">Donate or offer help to those in need.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
      Featured Campaigns
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((id) => (
        <div key={id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src={`https://via.placeholder.com/400x200?text=Campaign+${id}`}
            alt={`Campaign ${id}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
              Campaign {id}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A brief description of the campaign goes here.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">What People Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {["User 1", "User 2", "User 3"].map((user, index) => (
        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <p className="italic mb-4 text-gray-600 dark:text-gray-400">
            "This platform has changed my life for the better!"
          </p>
          <p className="font-bold text-gray-800 dark:text-gray-200">- {user}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-20 bg-lightBackground dark:bg-gray-900 text-center">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { label: "Lives Impacted", value: 1200 },
      { label: "Campaigns Completed", value: 350 },
      { label: "Volunteers Engaged", value: 500 },
    ].map((stat, index) => (
      <div key={index}>
        <h3 className="text-5xl font-bold text-blue-500">{stat.value}</h3>
        <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
      </div>
    ))}
  </div>
</section>
<section className="py-20 bg-blue-500 text-white text-center">
  <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
  <button className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
    Join Us Now
  </button>
</section>

<section className="py-20 bg-white dark:bg-gray-800">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
      Our Sponsors
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-6">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <img
            src={`https://via.placeholder.com/150x100?text=Sponsor+${id}`}
            alt={`Sponsor ${id}`}
            className="w-40"
          />
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-lightBackground dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Mohammed Shkier", role: "Founder & Developer", img: "team1.jpg" },
        { name: "Hamzeh Lutfi", role: "Developer", img: "team2.jpg" },
        { name: "Bayan Hamad", role: "Designer", img: "team3.jpg" },
      ].map((teamMember, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <img
            src={`/images/team/${teamMember.img}`}
            alt={teamMember.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{teamMember.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{teamMember.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>

    </>
  );
};

export default HomePage;
