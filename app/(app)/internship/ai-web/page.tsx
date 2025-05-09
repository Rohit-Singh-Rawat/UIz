import Hero from '@/components/internship/shared/Hero';
import Program from '@/components/internship/shared/program';

const LearningOutcomes = () => {
	const outcomes = [
		'Build and host responsive websites using HTML/CSS/JS and React',
		'Understand and apply basic machine learning algorithms',
		'Use AI tools to assist in coding, debugging, content creation, and data visualization',
		'Create a portfolio of deployed projects to showcase skills',
		'Build a job-ready resume and portfolio using tools like ChatGPT, Cursor, or Windserf',
	];

	return (
		<section className='py-16 bg-gradient-to-b from-light-background to-blue-50'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full'>
						What You'll Learn
					</span>
					<h2 className='text-3xl font-medium mt-3'>🎓 Learning Outcomes</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='bg-white rounded-lg shadow-sm p-6 border border-blue-100'>
						<p className='text-gray-700 mb-4'>
							By the end of this course, students will be able to:
						</p>
						<ul className='space-y-3'>
							{outcomes.map((outcome, index) => (
								<li
									key={index}
									className='flex items-start'
								>
									<span className='inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm mr-3 mt-0.5 flex-shrink-0'>
										{index + 1}
									</span>
									<span className='text-gray-800'>{outcome}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

const Certification = () => {
	const benefits = [
		'Certificate of Completion',
		'LinkedIn Skill Endorsement',
		'Eligibility for Internship or Mentorship Placement',
		'A Job-Ready Resume and Portfolio will be created and reviewed',
		'Job Assistance through the Konnectup.ai platform, helping students apply for relevant roles and prepare for interviews',
	];

	return (
		<section className='py-16 bg-light-background'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-light-accent/20 text-light-accent text-xs font-medium px-3 py-1 rounded-full'>
						Career Ready
					</span>
					<h2 className='text-3xl font-medium mt-3'>🎓 Certification & Job Assistance</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='border-l-4 border-light-accent pl-6 py-2'>
						<p className='text-gray-700 mb-6'>
							All students who complete the course with a final project will receive:
						</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className='bg-white rounded p-4 shadow-sm border border-gray-100 hover:border-light-accent/50 transition-colors'
								>
									<p className='text-gray-800'>{benefit}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const page = () => {
	const threeMonthProgram = {
		title: 'AI-first Web Development',
		time: '3-Month Program (60 Days)',
		goal: 'Goal: Learn to build modern web applications with AI assistance tools',
		weeks: [
			{
				title: 'HTML & CSS',
				days: [
					{ day: 1, title: 'What is the Web?' },
					{ day: 2, title: 'HTML Elements and Tags' },
					{ day: 3, title: 'CSS Styling and Selectors' },
					{ day: 4, title: 'Mini Project: Personal Portfolio Page' },
					{ day: 5, title: 'AI Tool Used: ChatGPT (HTML/CSS explanation & code review)' },
				],
			},
			{
				title: 'Responsive Design + GitHub',
				days: [
					{ day: 6, title: 'Flexbox & Media Queries' },
					{ day: 7, title: 'Page Structure Best Practices' },
					{ day: 8, title: 'Version Control with Git & GitHub' },
					{ day: 9, title: 'Hosting using Netlify/Vercel' },
					{ day: 10, title: 'AI Tool Used: GitHub Copilot (code completion)' },
				],
			},
			{
				title: 'JavaScript Basics',
				days: [
					{ day: 11, title: 'JS Syntax & DOM Manipulation' },
					{ day: 12, title: 'Functions & Events' },
					{ day: 13, title: 'Project: Interactive To-Do App' },
					{ day: 14, title: 'AI Tool Used: ChatGPT or Cursor/Windserf for debugging' },
					{ day: 15, title: 'AI Tool Used: Live code suggestion tools' },
				],
			},
			{
				title: 'Final Project + Deployment',
				days: [
					{ day: 16, title: 'Build Personal Portfolio (Part 1)' },
					{ day: 17, title: 'Build Personal Portfolio (Part 2)' },
					{ day: 18, title: 'Add Interactive Features' },
					{ day: 19, title: 'Deploy Personal Portfolio' },
					{ day: 20, title: 'AI Tool Used: ChatGPT for copywriting & page content' },
				],
			},
			{
				title: 'CSS Frameworks & Responsive Layouts',
				days: [
					{ day: 21, title: 'Introduction to Bootstrap / Tailwind CSS' },
					{ day: 22, title: 'Grid & Flex Layouts' },
					{ day: 23, title: 'Building Components with Frameworks' },
					{ day: 24, title: 'Responsive Design with Frameworks' },
					{ day: 25, title: 'AI Tool Used: ChatGPT or Copilot for styling assistance' },
				],
			},
			{
				title: 'JavaScript Deep Dive',
				days: [
					{ day: 26, title: 'Arrays, Loops, Objects' },
					{ day: 27, title: 'Form Handling Basics' },
					{ day: 28, title: 'Form Validation Techniques' },
					{ day: 29, title: 'Mini Project: Form Validator' },
					{ day: 30, title: 'AI Tool Used: Debugger assistance with Copilot' },
				],
			},
			{
				title: 'APIs & JSON',
				days: [
					{ day: 31, title: 'Fetch API' },
					{ day: 32, title: 'JSON Data Handling' },
					{ day: 33, title: 'Consuming Public APIs' },
					{ day: 34, title: 'Mini Project: Weather App' },
					{ day: 35, title: 'AI Tool Used: API documentation search' },
				],
			},
			{
				title: 'Final Project',
				days: [
					{ day: 36, title: 'Responsive Multi-page Website (Part 1)' },
					{ day: 37, title: 'Responsive Multi-page Website (Part 2)' },
					{ day: 38, title: 'Responsive Multi-page Website (Part 3)' },
					{ day: 39, title: 'Hosting & Deployment' },
					{ day: 40, title: 'AI Tool: Notion AI for tracking tasks & errors' },
				],
			},
			{
				title: 'React Fundamentals',
				days: [
					{ day: 41, title: 'Introduction to React' },
					{ day: 42, title: 'JSX Syntax' },
					{ day: 43, title: 'Props and Components' },
					{ day: 44, title: 'State Management Basics' },
					{ day: 45, title: 'AI Tool: Copilot for React component generation' },
				],
			},
			{
				title: 'React Hooks + Routing',
				days: [
					{ day: 46, title: 'useState, useEffect' },
					{ day: 47, title: 'Other React Hooks' },
					{ day: 48, title: 'React Router Basics' },
					{ day: 49, title: 'Mini Project: Blog Reader App' },
					{ day: 50, title: 'AI Tool: Code explanation and examples' },
				],
			},
			{
				title: 'Portfolio with React',
				days: [
					{ day: 51, title: 'Build Job-Ready Portfolio (Part 1)' },
					{ day: 52, title: 'Build Job-Ready Portfolio (Part 2)' },
					{ day: 53, title: 'Showcase Mini Projects' },
					{ day: 54, title: 'Portfolio Optimization' },
					{ day: 55, title: 'AI Tool Used: Cursor/Windserf for React support' },
				],
			},
			{
				title: 'AI-Powered Use Case',
				days: [
					{ day: 56, title: 'Cursor or Windserf Use Case' },
					{ day: 57, title: 'Final Project (Part 1)' },
					{ day: 58, title: 'Final Project (Part 2)' },
					{ day: 59, title: 'Final Project Deployment' },
					{ day: 60, title: 'AI Tool: Codeium or Copilot for React auto-suggestions' },
				],
			},
		],
	};

	const heroProps = {
		title: 'AI-First Web Development Internship',
		description:
			'Learn to build modern websites and applications with the help of AI tools and technologies',
		highlights: {
			title: 'Program Highlights',
			subtitle: 'Web Development powered by AI tools',
			items: [
				'Build with AI-assisted coding tools',
				'Create responsive websites with AI help',
				'Become proficient in AI for web development',
				'Build a portfolio of AI-enhanced web projects',
			],
		},
		duration: '3 Months',
		level: 'Beginner to Intermediate',
	};

	return (
		<main>
			<Hero {...heroProps} />
			<div className='mb-12 mt-12'>
				<Program {...threeMonthProgram} />
			</div>
			<LearningOutcomes />
			<Certification />
		</main>
	);
};

export default page;
