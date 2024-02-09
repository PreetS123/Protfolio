import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className="ab">
			 <h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1> 
			 <div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Frontend Developer  | Web Developer{' '}
					<a href='https://dropshipper.shopperr.in/search/hotproducts#' target="blank">Loomtree Fashion Private Limited  </a>
				</div>
				<div className={styles.date}>April 2023 - Present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilities </h3>
					</legend>
					<ul>
						<li>
							My role is to perform all the frontend task of present website.
                           </li>
						<li>
						 Designing new features and resolving bugs in e-commerce website. 
						</li>
						<li>
						    Responsible for the development of e-commerce admin panel.
							</li>
							
					</ul>
				</fieldset>
			</div> 

			<br/>

			 <div className={styles.container}>
				<div className={styles.position}>
				Frontend Developer || Web Developer{' '}
					<a href='https://www.linkedin.com/company/thinkzy-tech/' target="blank">Thinkzy Tech</a>
				</div>
				<div className={styles.date}>May 2022 - April 2023</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilities </h3>
					</legend>
					<ul>
						<li>
						End to end bug testing of websites.
						</li>
						<li>
						 Developing and design new features in web applications.
						</li>
						
					
					</ul>
				</fieldset>
			</div> 

		</div>
	);
};

export default Experiences;
