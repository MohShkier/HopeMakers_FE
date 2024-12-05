import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Empowering People with Disabilities</h1>
        <p>Access the tools and resources you need to live independently.</p>
        <button>Get Started</button>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">Step 1: Sign Up</div>
          <div className="step">Step 2: Create a Request</div>
          <div className="step">Step 3: Browse Options</div>
          <div className="step">Step 4: Donate or Offer Help</div>
          <div className="step">Step 5: Confirm and Support</div>
        </div>
      </section>

      {/* Featured Tools and Devices */}
      <section className="featured-tools">
        <h2>Featured Tools</h2>
        <div className="tools">
          <div className="tool">Wheelchair</div>
          <div className="tool">Hearing Aid</div>
          <div className="tool">Reaching Device</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="story">
          <p>"This platform has helped me find the tools I need to live independently!"</p>
          <span>- John Doe</span>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <h2>Get Involved</h2>
        <button>Donate Now</button>
        <button>Become a Volunteer</button>
      </section>

      {/* News and Blog */}
      <section className="blog">
        <h2>Latest News</h2>
        <div className="news">
          <div className="news-item">The Latest Tools for Accessibility in 2024</div>
          <div className="news-item">How Assistive Technology is Changing Lives</div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <button>Sign Up for Updates</button>
        <button>Contact Us</button>
      </footer>
    </div>
  );
};

export default HomePage;
