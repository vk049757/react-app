import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './experience.css'; // Import custom CSS for styles

const Experience = () => {
  const [clients, setClients] = useState(0);
  const [team, setTeam] = useState(0);
  const [projects, setProjects] = useState(0);
  const [nations, setNations] = useState(0);

  // Increment function
  const incrementCounter = (setState, targetValue, speed) => {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue += 1;
        setState(currentValue);
      } else {
        clearInterval(interval);
      }
    }, speed);
  };

  useEffect(() => {
    incrementCounter(setClients, 350, 10); // 350 + clients, speed 10ms per increment
    incrementCounter(setTeam, 50, 30); // 50+ team members, speed 30ms per increment
    incrementCounter(setProjects, 250, 15); // 250+ projects, speed 15ms per increment
    incrementCounter(setNations, 20, 50); // 20+ nations, speed 50ms per increment
  }, []);

  return (
    <section className="experience-section py-5 bg-light"
      style={{
        backgroundImage: 'url(/images/bg-counter.png)', // Corrected image path
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <p className="experience-heading">
                Our accomplishments - A testament of our excellence
            </p>
            <p className="experience-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
          </div>

          <div className="col-md-6">
            <div className="">
              <div className="row">
                <div className="col-6 mb-2">
                  <div className="counter-item">
                    <div className="heading3 text-white count-number">{clients} +</div>
                    <div className="body1 mt-4 text-white">Satisfied Clients</div>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="counter-item">
                    <div className="flex-item-center">
                      <div className="heading3 text-white count-number">{team} +</div>
                    </div>
                    <div className="body1 mt-4 text-white">Team Members</div>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="counter-item">
                    <div className="heading3 text-white count-number">{projects} +</div>
                    <div className="body1 mt-4 text-white">Projects Delivered</div>
                  </div>
                </div>
                <div className="col-6 mb-2">
                  <div className="counter-item">
                    <div className="heading3 text-white count-number">{nations} +</div>
                    <div className="body1 mt-4 text-white">Nations Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
