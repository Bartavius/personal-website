"use client";
import { useState } from "react";
import "./EducationSection.css";
import TimelineTree from "../../components/TimelineTree";
import ToggleTimeline from "../../components/ToggleTimeline";

export default function EducationSection() {
  const tabs = [
    {
      name: "Course Work",
      timeline: [
        {
          time: "Spring 2025",
          lines: [
            "CS 4400: Programming Languages",
            "CS 3650: Computer Systems",
            "CS 2800: Logic and Computation",
            "MATH 2331: Linear Algebra",
          ],
        },
        {
          time: "Fall 2024",
          lines: [
            "CS 4550: Web Development",
            "CS 3000: Algorithms and Data",
            "CS 3520: Programming in C++",
            "MATH 1342: Calculus 2 for Science/Engineering",
          ],
        },
        {
          time: "Summer 1 2024",
          lines: [
            "CS 3500: Object-Oriented Design",
            "CY 2550: Foundations of Cybersecurity",
          ],
        },
        {
          time: "Spring 2024",
          lines: [
            "CS 2810: Mathematics of Data Models",
            "CS 2510: Fundamentals of Computer Science 2",
            "CS 2511: Lab for CS 2510",
            "ENGW 1111: First-Year Writing",
            "MATH 1365: Intro to Math Reasoning",
          ],
        },
        {
          time: "Fall 2023",
          lines: [
            "CS 2500: Fundamentals of Computer Science 1",
            "CS 2501: Lab for CS 2500",
            "CS 1800: Discrete Structures",
            "CS 1802: Seminar for CS 1800",
            "COMM 1112: Public Speaking",
          ],
        },
      ],
    },
    {
      name: "Activities",
      timeline: [
        {
          time: "Spring 2025",
          lines: ["Won FinHacks 2025", "Participated in HackBeanpot 2025"],
        },
        {
            time: "Fall 2024",
            lines: ["Participated in CTF Thyme", "Participated in Versus CTF"],
          },
        {
          time: "Spring 2024",
          lines: [
            "Vice-President of Asian Student Alliance",
            "Farm Crew at Northeastern University Oakland",
          ],
        },
        {
          time: "Fall 2023",
          lines: [
            ,
            "President of Club Greenovation",
            "E-Board member of Asian Student Alliance",
            "Participated in Pawhacks 1.0",
          ],
        },
      ],
    },
  ];

  return (
    <div className="education-section">
      <div className="sub-heading">Education</div>
      <div className="section-divider" />
      <div className="degree-section">
        {/* <div className="university-name title">Northeastern University</div> */}
        <div className="university-logo">
          <img src="/NortheasternLogo.png" alt="NEU logo" className="logo" />
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
  );
}
