import React from 'react';
import './GuidelinesSection.css';

const GuidelinesSection = () => {
  return (
    <div className="guidelines-wrapper py-5 px-4">
      <div className="row justify-content-center">
        {/* Community Guidelines */}
        <div className="col-md-6 mb-4">
          <div className="guideline-card card-orange">
            <h3 className="guideline-title">Community Guidelines</h3>
            <p className="guideline-text">
           Be part of a community that promotes fairness and cooperation. Do not try to “cheat” in order to get points. 
            Foster a supportive environment and use your best judgment. The consequence of such behavior would be expulsion from the program. 
            Feel free to reach out for clarification – we’re always happy to help! 

            </p>
          </div>
        </div>

        {/* Criteria */}
        <div className="col-md-6 mb-4">
          <div className="guideline-card card-blue">
            <h3 className="guideline-title">Criteria</h3>
            <ul className="criteria-list">
              <li>Minimum one year left until graduation</li>
              <li>Enrolled in UG or PG program</li>
              <li>Commitment of at least two months</li>
              <li>Passionate about community impact</li>
              <li>Strong leadership & communication skills</li>
              <li>Connected to local developer community</li>
              <li>Hosted an event in the past year</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesSection;
