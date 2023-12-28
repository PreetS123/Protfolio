import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://i.ibb.co/xJ9GBJ6/Profilepic.jpg' // my Picture
			: 'https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img
				//  src={"https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"} 
				src={img}
				 alt='' />
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
					{/*Hi, I'm Preeti Sharma, a MERN developer with 6 months of experience building web applications using MongoDB, Express, React, and Node.js. 
					<br/>
	As a MERN developer, I have a strong background in creating dynamic and responsive web applications using the MERN stack. I also have experience in working with Git, Redux, Matarial-UI, and Chakra UI.*/}
					Hello,I am a front-end developer with a strong interest in projects requiring conceptual and analytical thinking. Looking
forward to working in a team or collaboration, where I can efficiently contribute my skills and abilities to the
growth of the organization and build my professional career.
					<span style={{ color: `#1455CF ` }}>
						{' '}
						Looking for an opportunity at full stack web developer role
					</span> 
					.
				</p>
			</div>
		</div>
	);
};

export default About;
