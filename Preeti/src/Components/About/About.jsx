import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://i.ibb.co/C8G6k0H/img1.jpg' // my Picture
			: 'https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Preeti Sharma and I enjoy creating things that are 
					live on the internet.
					<br /> Here I'm with some web application and three major project.
					While working on collaborative projects I also  learned about teamwork, time management ,  leadership and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#1455CF ` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
