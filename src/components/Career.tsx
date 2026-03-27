import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer (Virtual Intern)</h4>
                <h5>Aimerz</h5>
              </div>
              <h3>2025
</h3>
            </div>
            <p>
             Built a responsive e-commerce application with an admin panel using the MERN stack, implemented authentication, product and order management, and optimized MongoDB schemas for efficient data handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
