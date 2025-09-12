import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    color: 'orange',
    icon: '🚀',
    title: 'Launch Your Career',
    description: 'Gain real-world experience in marketing and community management that gives you a decisive edge in the job market',
  },
  {
    color: '#0d6efd',
    icon: '🏅',
    title: 'Earn Exclusive Rewards',
    description: 'Get a monthly stipend, limited-edition swag, and a certificate leadership certificate to showcase on your LinkedIn',
  },
  {
    color: '#dc3545',
    icon: '💼',
    title: 'Powerful Network',
    description: 'Connect with top student leaders nationwide and make a tangible impact on your campus community.',
  },
  {
    color: '#198754',
    icon: '📣',
    title: 'Developing Skills',
    description: 'Master leadership, public speaking, and strategic planning - skills that go beyond the textbook',
  },
];

const FeaturesSection = () => {
  return (
    <div className="features-wrapper py-5 px-4">
      <h2 className="text-center fw-bold mb-5 text-primary">
        Join the CampusHub Ambassador Program and transform campus leadership!
      </h2>
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="feature-box" style={{ borderTop: `5px solid ${feature.color}` }}>
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h5 className="feature-title">{feature.title}</h5>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
