import React from 'react';
import './Members.css';

const Members = () => {
  const members = [
    {
      name: "Sripath Roy",
      role: "Mentor",
      image: "/path-to-member1.jpg"
    },
    {
      name: "Jashwanth",
      role: "Full Stack Developer",
      image: "/path-to-member1.jpg"
    },
    {
      name: "Raunit raj",
      role: "Frontend Developer",
      image: "/path-to-member2.jpg"
    },
    {
      name: "Harsh raj",
      role: "Team Lead",
      image: "/path-to-member3.jpg"
    },
    {
      name: "B.Suraj Patra ",
      role: "Scrum Master",
      image: "/path-to-member4.jpg"
    },
    {
      name: "Saneesh Reddy",
      role: "Social Media Manager",
      image: "/path-to-member5.jpg"
    },
    {
      name: "P.Vamsi Krishna",
      role: "Marketing Manager",
      image: "/path-to-member6.jpg"
    },
    {
      name: "K.Praneeth",
      role: "Backend Developer",
      image: "/path-to-member7.jpg"
    },
    // Add more members as needed
  ];

  return (
    <div className="members-section" id="members-section">
      <h2>Our Team</h2>
      <div className="members-container">
        <div className="members-scroll">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members; 