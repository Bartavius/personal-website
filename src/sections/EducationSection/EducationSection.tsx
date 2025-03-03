"use client";
import { useState } from "react";
import "./EducationSection.css";
import TimelineTree from "../../components/TimelineTree";
import ToggleTimeline from "../../components/ToggleTimeline";
import tabs from "../../database/Education.json";

export default function EducationSection() {

  return (
    <div>
      <div className="sub-heading">Education</div>
      <div className="section-divider" />
      <div className="education-section">
        <div className="degree-section">
          {/* <div className="university-name title">Northeastern University</div> */}
          <div className="university-logo">
            <img src="/logo/NortheasternLogo.png" alt="NEU logo" className="logo" />
          </div>
          <div className="degree-description">
            <div className="degree-title">
              B.S. Computer Science with a Concentration in Software
            </div>
            <div className="degree-body">
              <b>GPA:</b> 3.97 / 4.00
            </div>
            <div className="degree-body">
              <b>Honors:</b> Dean's List Fall 2023, Spring 2024, Fall 2024
            </div>
          </div>
        </div>
        <div className="education-toggle">
          <ToggleTimeline tree={tabs} />
        </div>
      </div>
    </div>
  );
}
