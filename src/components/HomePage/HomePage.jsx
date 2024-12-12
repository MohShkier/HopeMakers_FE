import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLanguage } from "../../Context/LanguageContext";
ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  const { language } = useLanguage();

  const dataWorld = {
    labels: ["Normal People", "Disabled People"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#93C5FD", "#2563EB"],
        hoverBackgroundColor: ["#3B82F6", "#1E40AF"],
      },
    ],
  };

  const dataJordan = {
    labels: ["Normal People", "Disabled People"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#F87171", "#10B981"],
        hoverBackgroundColor: ["#DC2626", "#047857"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#374151" },
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div dir={language === "en" ? "ltr" : "rtl"} className="!w-full">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-center text-white py-20 lg:py-40"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        aria-labelledby="hero-heading"
      >
        <div className="bg-black bg-opacity-35 absolute inset-0 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1
            id="hero-heading"
            className="text-4xl lg:text-6xl font-bold mb-4"
            tabIndex="0"
          >
            Empowering People with Disabilities
          </h1>
          <p className="text-lg lg:text-xl mb-6" tabIndex="0">
            Together, we can make a difference.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-bold transition-colors"
            aria-label="Get Started with the platform"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Charts Section */}
      <section
        className="py-20 bg-gray-100 dark:bg-gray-900"
        aria-labelledby="charts-heading"
      >
        <div className="container mx-auto">
          <h2
            id="charts-heading"
            className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200"
            tabIndex="0"
          >
            Why Disabled People?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChartCard
              title="Disabled Percentage Over the World"
              data={dataWorld}
              options={chartOptions}
            />
            <ChartCard
              title="Disabled Percentage in Jordan"
              data={dataJordan}
              options={chartOptions}
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <InfoGrid
        title="How It Works"
        steps={[
          {
            icon: "fa-user-plus",
            title: "Step 1: Sign Up",
            description: "Create your account to get started.",
          },
          {
            icon: "fa-hand-holding-heart",
            title: "Step 2: Explore Needs",
            description: "Browse cases and decide how to help.",
          },
          {
            icon: "fa-check-circle",
            title: "Step 3: Make a Difference",
            description: "Donate or offer help to those in need.",
          },
        ]}
      />

      {/* Other Content Sections */}
      <ContentGrid
        title="Featured Campaigns"
        items={[1, 2, 3].map((id) => ({
          title: `Campaign ${id}`,
          description: "A brief description of the campaign goes here.",
          image: `https://via.placeholder.com/400x200?text=Campaign+${id}`,
        }))}
      />

      {/* Additional sections like testimonials, stats, sponsors, and team */}
      {/* Use the same accessible practices */}

      <section className="py-20 bg-lightBackground dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200 "  tabIndex="0">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Mohammed Shkier", role: "Founder & Developer", img: "/moh.png" },
        { name: "Hamzeh Lutfi", role: "Developer", img: "team2.jpg" },
        { name: "Bayan Hamad", role: "Designer", img: "team3.jpg" },
      ].map((teamMember, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md " >
          <img
           tabIndex="0"
            src={teamMember.img}
            alt={teamMember.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200"  tabIndex="0">{teamMember.name}</h3>
          <p className="text-gray-600 dark:text-gray-400"  tabIndex="0">{teamMember.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

const ChartCard = ({ title, data, options }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    aria-labelledby={`${title}-chart`}
  >
    <h2
      id={`${title}-chart`}
      className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center"
      tabIndex="0"
    >
      {title}
    </h2>
    <div className="flex justify-center">
      <div className="w-72 h-72" aria-label={`Pie chart showing ${title}`}>
        <Pie data={data} options={options} />
      </div>
    </div>
  </div>
);

const InfoGrid = ({ title, steps }) => (
  <section
    className="py-20 bg-lightBackground dark:bg-gray-900 text-center"
    aria-labelledby="info-grid-heading"
  >
    <div className="container mx-auto">
      <h2
        id="info-grid-heading"
        className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200"
        tabIndex="0"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center" tabIndex="0">
            <div
              className="bg-blue-500 text-white p-4 rounded-full mb-4"
              aria-hidden="true"
            >
              <i className={`fa-solid ${step.icon} text-3xl`}></i>
            </div>
            <h3 className="font-bold text-xl">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  
);

const ContentGrid = ({ title, items }) => (
  <section
    className="py-20 bg-gray-100 dark:bg-gray-900"
    aria-labelledby="content-grid-heading"
  >
    <div className="container mx-auto">
      <h2
        id="content-grid-heading"
        className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200"
        tabIndex="0"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            tabIndex="0"
          >
            {item.image && (
              <img
                src={item.image}
                alt={`Visual representation of ${item.title}`}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  
);

export default HomePage;
