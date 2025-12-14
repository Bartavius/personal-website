"use client";
import "./EducationSection.css";
import ToggleTimeline from "../../components/ToggleTimeline";
import tabs from "../../database/Education.json";

export default function EducationSection() {
  return (
    <div className="education-container">
      <div className="sub-heading">Qualifications</div>
      <div className="section-divider" />
      <div className="education-section">
        <div className="degree-section">
          <div className="university-logo">
            <img
              src="/logo/NortheasternLogo.png"
              alt="NEU logo"
              className="logo"
            />
          </div>
          <div className="degree-description">
            <span className="degree-title">
              B.S. Computer Science with a Concentration in Software
            </span>
            <span className="degree-subtitle">
              <i>Minor in Mathematics</i>
            </span>
            <span className="degree-body">
              <span>
                <b>GPA:</b> 3.84 / 4.00
              </span>
              <span>
                <b>Awards:</b> Dean's List Fall 2023, Spring 2024, Fall 2024,
                Spring 2025
              </span>
            </span>
          </div>
        </div>
        <div className="education-toggle">
          <ToggleTimeline tree={tabs} />
        </div>
      </div>
    </div>
  );
}
