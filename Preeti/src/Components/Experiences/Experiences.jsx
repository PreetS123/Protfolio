import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className="ab">
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        <div className={styles.position}>
          Mern Stack Developer | FullStack Developer{" "}
          <a
            href="https://axonichealth.com/"
            target="blank"
          >
            Axonic health pvt. ltd.{" "}
          </a>
        </div>
        <div className={styles.date}>Feb 2023 - Current</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilities </h3>
          </legend>
          <ul>
            <li>
            As a Frontend Developer, my responsibilities include using ReactJS, HTML5, DOM manipulation, CSS3,
            and React-Native frameworks to build strong and scalable web and tab applications.
            </li>
            <li>
            I actively ensured seamless integration between client and server components, facilitating efficient
            management of hospital resources and patient data.
            </li>
            <li>
            Also contributing to the API development of the BI dashboard and its integration.
            </li>
          </ul>
        </fieldset>
      </div>

      <br/>

      <div className={styles.container}>
        <div className={styles.position}>
          React.js Developer | Frontend Developer{" "}
          <a
            href="https://dropshipper.shopperr.in/search/hotproducts#"
            target="blank"
          >
            Loomtree Fashion Private Limited{" "}
          </a>
        </div>
        <div className={styles.date}>April 2023 - Feb 2024</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilities </h3>
          </legend>
          <ul>
            <li>
              Involved in development of an Authorization panel for Admin,
              sub-admin, and normal users.
            </li>
            <li>
              Seamlessly integrated new features into existing websites,
              significantly improving user engagement and operational
              efficiency.
            </li>
            <li>
              Test APIs via Postman, understand the wireframes team, and create
              UI test cases for development and production confidence.
            </li>
          </ul>
        </fieldset>
      </div>

      <br />

      <div className={styles.container}>
        <div className={styles.position}>
          UI Developer || Frontend Developer{" "}
          <a
            href="https://www.linkedin.com/company/thinkzy-tech/"
            target="blank"
          >
            Thinkzy Tech
          </a>
        </div>
        <div className={styles.date}>Dec 2020 - April 2023</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilities </h3>
          </legend>
          <ul>
            <li>
              Translating Figma-designed UI/UX into responsive interfaces using
              React.js and MUI.
            </li>
            <li>End to end bug testing of websites.</li>
            <li>Developing and design new features in web applications.</li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Experiences;
