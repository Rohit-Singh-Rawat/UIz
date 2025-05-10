import { Metadata } from 'next';
import Hero from '@/components/internship/shared/Hero';
import Program from '@/components/internship/shared/program';

export const metadata: Metadata = {
	title: 'Web Development Internship | LinkVerse',
	description:
		'Learn to build and deploy responsive websites with HTML, CSS, and JavaScript. Our web development internship offers 1-3 month programs with hands-on projects.',
	keywords: ['web development', 'internship', 'HTML', 'CSS', 'JavaScript', 'React', 'portfolio'],
};

const page = () => {
	const oneMonthProgram = {
		title: 'Web Basics & First Website',
		time: '1-Month Program (20 Days)',
		goal: 'Goal: Help students create and publish their first static website.',
		weeks: [
			{
				title: 'HTML + CSS',
				days: [
					{ day: 1, title: 'What is Web Dev? HTML Basics' },
					{ day: 2, title: 'HTML Tags – Images, Links, Lists' },
					{ day: 3, title: 'CSS Basics – Selectors, Colors, Fonts' },
					{ day: 4, title: 'CSS Box Model + Spacing' },
					{ day: 5, title: 'Mini Project – "About Me" Page' },
				],
			},
			{
				title: 'Layout + Hosting',
				days: [
					{ day: 6, title: 'CSS Flexbox (easy layouting)' },
					{ day: 7, title: 'Page Structure – Header, Footer, Sections' },
					{ day: 8, title: 'Responsive Basics (media queries)' },
					{ day: 9, title: 'Intro to GitHub + Netlify' },
					{ day: 10, title: 'Deploy "About Me" website live' },
				],
			},
			{
				title: 'Intro to JavaScript',
				days: [
					{ day: 11, title: 'What is JavaScript? Basic Syntax' },
					{ day: 12, title: 'Variables, Functions, Events' },
					{ day: 13, title: 'Using JS in Webpages' },
					{ day: 14, title: 'DOM Basics (Change text/images on click)' },
					{ day: 15, title: 'Mini Project – Color Changer or To-Do List' },
				],
			},
			{
				title: 'Final Project',
				days: [
					{ day: 16, title: 'Project Planning – Portfolio Site' },
					{ day: 17, title: 'Build Portfolio – HTML' },
					{ day: 18, title: 'Add CSS Styling' },
					{ day: 19, title: 'Add JS Interaction (Button/Toggle)' },
					{ day: 20, title: 'Launch Website + Present' },
				],
			},
		],
	};

	const twoMonthProgram = {
		title: 'Frontend Developer Starter',
		time: '2-Month Program (40 Days)',
		goal: 'Goal: Strong base in HTML, CSS, JS + Build 2-3 hosted websites.',
		weeks: [
			{
				title: 'HTML + CSS',
				days: [
					{ day: 1, title: 'What is Web Dev? HTML Basics' },
					{ day: 2, title: 'HTML Tags – Images, Links, Lists' },
					{ day: 3, title: 'CSS Basics – Selectors, Colors, Fonts' },
					{ day: 4, title: 'CSS Box Model + Spacing' },
					{ day: 5, title: 'Mini Project – "About Me" Page' },
				],
			},
			{
				title: 'Layout + Hosting',
				days: [
					{ day: 6, title: 'CSS Flexbox (easy layouting)' },
					{ day: 7, title: 'Page Structure – Header, Footer, Sections' },
					{ day: 8, title: 'Responsive Basics (media queries)' },
					{ day: 9, title: 'Intro to GitHub + Netlify' },
					{ day: 10, title: 'Deploy "About Me" website live' },
				],
			},
			{
				title: 'Intro to JavaScript',
				days: [
					{ day: 11, title: 'What is JavaScript? Basic Syntax' },
					{ day: 12, title: 'Variables, Functions, Events' },
					{ day: 13, title: 'Using JS in Webpages' },
					{ day: 14, title: 'DOM Basics (Change text/images on click)' },
					{ day: 15, title: 'Mini Project – Color Changer or To-Do List' },
				],
			},
			{
				title: 'Final Project',
				days: [
					{ day: 16, title: 'Project Planning – Portfolio Site' },
					{ day: 17, title: 'Build Portfolio – HTML' },
					{ day: 18, title: 'Add CSS Styling' },
					{ day: 19, title: 'Add JS Interaction (Button/Toggle)' },
					{ day: 20, title: 'Launch Website + Present' },
				],
			},
			{
				title: 'JavaScript Continued',
				days: [
					{ day: 21, title: 'Arrays, Loops in JS' },
					{ day: 22, title: 'Simple Form Validation' },
					{ day: 23, title: 'Mini Project – Feedback Form' },
					{ day: 24, title: 'Intro to Bootstrap (Pre-built styling)' },
					{ day: 25, title: 'Add Bootstrap to your site' },
				],
			},
			{
				title: 'Project Building',
				days: [
					{ day: 26, title: 'Start Full Website Project (Blog or Shop)' },
					{ day: 27, title: 'Build Pages & Style (Part 1)' },
					{ day: 28, title: 'Build Pages & Style (Part 2)' },
					{ day: 29, title: 'Add JavaScript (navigation, form)' },
					{ day: 30, title: 'Final Testing & Launch' },
				],
			},
			{
				title: 'Hosting & Git',
				days: [
					{ day: 31, title: 'Git Basics – Commit, Push' },
					{ day: 32, title: 'GitHub Pages & Deployment' },
					{ day: 33, title: 'Custom Domain Setup' },
					{ day: 34, title: 'Portfolio Optimization' },
					{ day: 35, title: 'Add Projects to Portfolio' },
				],
			},
			{
				title: 'Review & Certification',
				days: [
					{ day: 36, title: 'Final Project Work (Part 1)' },
					{ day: 37, title: 'Final Project Work (Part 2)' },
					{ day: 38, title: 'Final Project Work (Part 3)' },
					{ day: 39, title: 'Practice Interviews & Resume Tips' },
					{ day: 40, title: 'Demo Day + Certification' },
				],
			},
		],
	};

	const threeMonthProgram = {
		title: 'Complete Beginner to Junior Developer',
		time: '3-Month Program (60 Days)',
		goal: 'Goal: Make students capable of applying for internships or freelance projects.',
		weeks: [
			{
				title: 'HTML + CSS',
				days: [
					{ day: 1, title: 'What is Web Dev? HTML Basics' },
					{ day: 2, title: 'HTML Tags – Images, Links, Lists' },
					{ day: 3, title: 'CSS Basics – Selectors, Colors, Fonts' },
					{ day: 4, title: 'CSS Box Model + Spacing' },
					{ day: 5, title: 'Mini Project – "About Me" Page' },
				],
			},
			{
				title: 'Layout + Hosting',
				days: [
					{ day: 6, title: 'CSS Flexbox (easy layouting)' },
					{ day: 7, title: 'Page Structure – Header, Footer, Sections' },
					{ day: 8, title: 'Responsive Basics (media queries)' },
					{ day: 9, title: 'Intro to GitHub + Netlify' },
					{ day: 10, title: 'Deploy "About Me" website live' },
				],
			},
			{
				title: 'Intro to JavaScript',
				days: [
					{ day: 11, title: 'What is JavaScript? Basic Syntax' },
					{ day: 12, title: 'Variables, Functions, Events' },
					{ day: 13, title: 'Using JS in Webpages' },
					{ day: 14, title: 'DOM Basics (Change text/images on click)' },
					{ day: 15, title: 'Mini Project – Color Changer or To-Do List' },
				],
			},
			{
				title: 'Final Project',
				days: [
					{ day: 16, title: 'Project Planning – Portfolio Site' },
					{ day: 17, title: 'Build Portfolio – HTML' },
					{ day: 18, title: 'Add CSS Styling' },
					{ day: 19, title: 'Add JS Interaction (Button/Toggle)' },
					{ day: 20, title: 'Launch Website + Present' },
				],
			},
			{
				title: 'JavaScript Continued',
				days: [
					{ day: 21, title: 'Arrays, Loops in JS' },
					{ day: 22, title: 'Simple Form Validation' },
					{ day: 23, title: 'Mini Project – Feedback Form' },
					{ day: 24, title: 'Intro to Bootstrap (Pre-built styling)' },
					{ day: 25, title: 'Add Bootstrap to your site' },
				],
			},
			{
				title: 'Project Building',
				days: [
					{ day: 26, title: 'Start Full Website Project (Blog or Shop)' },
					{ day: 27, title: 'Build Pages & Style (Part 1)' },
					{ day: 28, title: 'Build Pages & Style (Part 2)' },
					{ day: 29, title: 'Add JavaScript (navigation, form)' },
					{ day: 30, title: 'Final Testing & Launch' },
				],
			},
			{
				title: 'Hosting & Git',
				days: [
					{ day: 31, title: 'Git Basics – Commit, Push' },
					{ day: 32, title: 'GitHub Pages & Deployment' },
					{ day: 33, title: 'Custom Domain Setup' },
					{ day: 34, title: 'Portfolio Optimization' },
					{ day: 35, title: 'Add Projects to Portfolio' },
				],
			},
			{
				title: 'Review & Certification',
				days: [
					{ day: 36, title: 'Final Project Work (Part 1)' },
					{ day: 37, title: 'Final Project Work (Part 2)' },
					{ day: 38, title: 'Final Project Work (Part 3)' },
					{ day: 39, title: 'Practice Interviews & Resume Tips' },
					{ day: 40, title: 'Demo Day + Certification' },
				],
			},
			{
				title: 'React (Light Intro)',
				days: [
					{ day: 41, title: 'What is React? JSX Basics' },
					{ day: 42, title: 'Components in React' },
					{ day: 43, title: 'Props & Simple State' },
					{ day: 44, title: 'Basic React App – Quote Generator' },
					{ day: 45, title: 'Hosting React App' },
				],
			},
			{
				title: 'Working with APIs',
				days: [
					{ day: 46, title: 'What is an API? Fetch Basics' },
					{ day: 47, title: 'Use a Public API – Joke Generator' },
					{ day: 48, title: 'Display API data in React' },
					{ day: 49, title: 'Mini Project – Weather App' },
					{ day: 50, title: 'Final API Project Testing' },
				],
			},
			{
				title: 'Portfolio & Real-World Prep',
				days: [
					{ day: 51, title: 'Create Final Portfolio Website (Part 1)' },
					{ day: 52, title: 'Create Final Portfolio Website (Part 2)' },
					{ day: 53, title: 'Create Final Portfolio Website (Part 3)' },
					{ day: 54, title: 'Add All Projects + About + Resume (Part 1)' },
					{ day: 55, title: 'Add All Projects + About + Resume (Part 2)' },
				],
			},
			{
				title: 'Final Wrap-Up',
				days: [
					{ day: 56, title: 'Practice Portfolio Presentation' },
					{ day: 57, title: 'Final Project Work (Part 1)' },
					{ day: 58, title: 'Final Project Work (Part 2)' },
					{ day: 59, title: 'Final Project Work (Part 3)' },
					{ day: 60, title: 'Final Demo, Resume Help, Certification' },
				],
			},
		],
	};

	return (
		<main>
			<Hero />
			<div className='mb-12 mt-12'>
				<Program {...oneMonthProgram} />
			</div>
			<div className='mb-12'>
				<Program {...twoMonthProgram} />
			</div>
			<div className='mb-12'>
				<Program {...threeMonthProgram} />
			</div>
		</main>
	);
};

export default page;
