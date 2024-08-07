import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import Experiences from "../Experiences/Experiences";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 2));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 2));
      // window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hi, My name is</span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Preeti Sharma
            </div>
          </h1>
          <h1>
            I'm a Software Engineer with hands-on experience
            in [ReactJS, JavaScript, HTML5, CSS3]. Committed to high-quality
            code, meeting deadlines, and continuous learning.
          </h1>
          <div className={styles.btn}>
            <a
              // href="https://drive.google.com/drive/folders/1quVzPeNJ0aU5Ja0aGl0b2ISu94JDSBy5?usp=sharing" // Resume
              href="https://drive.google.com/drive/folders/1vB7HqhN47j-q_T3F6RPj3-1JffjUCC5I?usp=sharing"
              target="blank"
            >
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Resume</span> <i className="fas fa-file-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
          className={styles.profileImage}
        >
          <img
            src="https://i.ibb.co/xJ9GBJ6/Profilepic.jpg" //my Picture
            alt="Profile pic"
          />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.ience}
      >
        <About />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>

      <div
        id="experience"
        className={styles.experience}
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          style={{ color: `${newTheme.para}` }}
        >
          <Experiences />
        </div>
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          My Projects
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={projectArray.length == 2 ? "Show More" : "Show Less"}
          handleButton={handleShowMoreBtn}
        />
      </div>
      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
