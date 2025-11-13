import React from "react";
import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGit,
  FaBootstrap,
  FaJava,
  FaDatabase,
  FaCodeBranch,
  FaRandom,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdLoop, MdDynamicFeed } from "react-icons/md";
import { TbBinaryTree, TbStack2 } from "react-icons/tb";

const FaIcons = (icon, color) => {
  return React.cloneElement(icon, {
    size: 40,
    className: "icon-style",
    color: color,
  });
};

const Skills = () => {
  const skillsArr = [
    { name: "HTML", level: "Advanced", icon: FaIcons(<FaHtml5 />, "#E34F26") },
    { name: "CSS", level: "Advanced", icon: FaIcons(<FaCss3Alt />, "#1572B6") },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: FaIcons(<FaJs />, "#F7DF1E"),
    },
    {
      name: "React",
      level: "Intermediate",
      icon: FaIcons(<FaReact />, "#61DBFB"),
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      icon: FaIcons(<FaBootstrap />, "#7952B3"),
    },
    {
      name: "Node.js",
      level: "Beginner",
      icon: FaIcons(<FaNodeJs />, "#68A063"),
    },
    {
      name: "Python",
      level: "Intermediate",
      icon: FaIcons(<FaPython />, "#3776AB"),
    },
    { name: "Git", level: "Intermediate", icon: FaIcons(<FaGit />, "#F1502F") },
    {
      name: "Java",
      level: "Intermediate",
      icon: FaIcons(<FaJava />, "#007396"),
    },
    {
      name: "SQL",
      level: "Beginner",
      icon: FaIcons(<FaDatabase />, "#007396"),
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      icon: FaIcons(<SiTypescript />, "#3178C6"),
    },
  ];

  const dsaSkillsArr = [
    {
      name: "Arrays & Strings",
      level: "Advanced",
      icon: FaIcons(<FaProjectDiagram />, "#4B5563"),
    },
    {
      name: "Linked     Lists",
      level: "Intermediate",
      icon: FaIcons(<FaCodeBranch />, "#4B5563"),
    },
    {
      name: "Recursion & Backtracking",
      level: "Intermediate",
      icon: FaIcons(<MdLoop />, "#4B5563"),
    },
    {
      name: "Binary Search",
      level: "Intermediate",
      icon: FaIcons(<FaSearch />, "#4B5563"),
    },
    {
      name: "Sliding Window",
      level: "Intermediate",
      icon: FaIcons(<FaRandom />, "#4B5563"),
    },
    {
      name: "Trees & Graphs",
      level: "Intermediate",
      icon: FaIcons(<TbBinaryTree />, "#4B5563"),
    },
    {
      name: "Stacks & Queues",
      level: "Intermediate",
      icon: FaIcons(<TbStack2 />, "#4B5563"),
    },
  ];

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
      {skill.icon && <div>{skill.icon}</div>}
    </div>
  );

  return (
    <section id="skills" className="skills-section block">
      <center><h1>Skills</h1></center>
      <div className="skills-container block">
        <h2 className="skills-title block">Tech Stack</h2>
       
        <div className="skills-grid block">
          
          {skillsArr.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <h2 className="skills-title block">DSA & Problem Solving</h2>
        <div className="skills-grid block">
          {dsaSkillsArr.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <section className="skills-section block">
          <div className="skills-container block">
            <h2 className="skills-title block">🏅 LeetCode Achievements</h2>
            <div className="leetcode-badges block">
              <div>
                <img
                  src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif"
                  alt="LeetCode Badge 1"
                  className="badge-img"
                />
                <p>50 Days Batch</p>
              </div>
              <div>
                <img
                  src="https://assets.leetcode.com/static_assets/others/2550.gif"
                  alt="LeetCode Badge 2"
                  className="badge-img block"
                />
                <p>50 Days Batch</p>
              </div>
            </div>
            <p className="leetcode-description block">
              I’ve actively solved over <strong>200+ DSA problems</strong> on
              LeetCode, focusing on Arrays, Strings, Linked Lists, Trees,
              Sliding Window, and Recursion. I’ve earned badges for consistency
              and progress, and I’m continually sharpening my problem-solving
              skills for coding interviews.
              <br />
              Visit my full profile 👉{" "}
              <a
                href="https://leetcode.com/u/mosesbeniyel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                leetcode.com/u/mosesbeniyel
              </a>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
