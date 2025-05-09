import Hero from '@/components/internship/shared/Hero';
import Program from '@/components/internship/shared/program';

const page = () => {
	const oneMonthProgram = {
		title: 'Intro to Data Science with Python',
		time: '1-Month Program (20 Days)',
		goal: 'Goal: Understand Python basics and analyze real data.',
		weeks: [
			{
				title: 'Python Fundamentals',
				days: [
					{ day: 1, title: 'Python Introduction' },
					{ day: 2, title: 'Variables, Lists, Loops' },
					{ day: 3, title: 'Functions, If-Else' },
					{ day: 4, title: 'Working with Files' },
					{ day: 5, title: 'Mini Project – Text Analyzer' },
				],
			},
			{
				title: 'Numpy & Pandas',
				days: [
					{ day: 6, title: 'Numpy Basics – Arrays & Math' },
					{ day: 7, title: 'Pandas – DataFrames' },
					{ day: 8, title: 'Reading CSV, Simple Analysis' },
					{ day: 9, title: 'Cleaning Data – Drop, Fill, Replace' },
					{ day: 10, title: 'Mini Project – Data Analysis on CSV' },
				],
			},
			{
				title: 'Visualization',
				days: [
					{ day: 11, title: 'Matplotlib – Line, Bar Charts' },
					{ day: 12, title: 'Seaborn – Heatmaps, Histograms' },
					{ day: 13, title: 'Project – Visualizing a Real Dataset' },
					{ day: 14, title: 'Group Work – Choose dataset' },
					{ day: 15, title: 'Present Group EDA Projects' },
				],
			},
			{
				title: 'ML Lite',
				days: [
					{ day: 16, title: 'What is Machine Learning?' },
					{ day: 17, title: 'Linear Regression with scikit-learn' },
					{ day: 18, title: 'Predict using a small dataset' },
					{ day: 19, title: 'Mini Project – Salary Predictor' },
					{ day: 20, title: 'Final Project & Wrap Up' },
				],
			},
		],
	};

	const twoMonthProgram = {
		title: 'Advanced Data Science with Python',
		time: '2-Month Program (40 Days)',
		goal: 'Goal: Gain deeper analysis skills and ML basics.',
		weeks: [
			{
				title: 'Python Fundamentals',
				days: [
					{ day: 1, title: 'Python Introduction' },
					{ day: 2, title: 'Variables, Lists, Loops' },
					{ day: 3, title: 'Functions, If-Else' },
					{ day: 4, title: 'Working with Files' },
					{ day: 5, title: 'Mini Project – Text Analyzer' },
				],
			},
			{
				title: 'Numpy & Pandas',
				days: [
					{ day: 6, title: 'Numpy Basics – Arrays & Math' },
					{ day: 7, title: 'Pandas – DataFrames' },
					{ day: 8, title: 'Reading CSV, Simple Analysis' },
					{ day: 9, title: 'Cleaning Data – Drop, Fill, Replace' },
					{ day: 10, title: 'Mini Project – Data Analysis on CSV' },
				],
			},
			{
				title: 'Visualization',
				days: [
					{ day: 11, title: 'Matplotlib – Line, Bar Charts' },
					{ day: 12, title: 'Seaborn – Heatmaps, Histograms' },
					{ day: 13, title: 'Project – Visualizing a Real Dataset' },
					{ day: 14, title: 'Group Work – Choose dataset' },
					{ day: 15, title: 'Present Group EDA Projects' },
				],
			},
			{
				title: 'ML Lite',
				days: [
					{ day: 16, title: 'What is Machine Learning?' },
					{ day: 17, title: 'Linear Regression with scikit-learn' },
					{ day: 18, title: 'Predict using a small dataset' },
					{ day: 19, title: 'Mini Project – Salary Predictor' },
					{ day: 20, title: 'Final Project & Wrap Up' },
				],
			},
			{
				title: 'ML Continued',
				days: [
					{ day: 21, title: 'Classification – Logistic Regression' },
					{ day: 22, title: 'Confusion Matrix, Accuracy' },
					{ day: 23, title: 'Decision Trees Basics' },
					{ day: 24, title: 'Clustering – KMeans' },
					{ day: 25, title: 'Mini ML Project' },
				],
			},
			{
				title: 'EDA Practice',
				days: [
					{ day: 26, title: 'Work on a real dataset (Part 1)' },
					{ day: 27, title: 'Work on a real dataset (Part 2)' },
					{ day: 28, title: 'Work on a real dataset (Part 3)' },
					{ day: 29, title: 'Group Project Presentation' },
					{ day: 30, title: 'Resume Workshop' },
				],
			},
			{
				title: 'Deployment Lite',
				days: [
					{ day: 31, title: 'Streamlit Basics' },
					{ day: 32, title: 'Make ML App with Streamlit' },
					{ day: 33, title: 'Host App on Streamlite Cloud' },
					{ day: 34, title: 'Final Streamlit Project Planning' },
					{ day: 35, title: 'Build & Test Streamlit Project' },
				],
			},
			{
				title: 'Finalization',
				days: [
					{ day: 36, title: 'Final Project (Part 1)' },
					{ day: 37, title: 'Final Project (Part 2)' },
					{ day: 38, title: 'Final Project (Part 3)' },
					{ day: 39, title: 'Mock Interviews & Feedback' },
					{ day: 40, title: 'Final Demo Day + Certificate' },
				],
			},
		],
	};

	const heroProps = {
		title: 'Data Science Internship',
		description:
			'Master Python and data analysis skills to extract insights from real-world datasets',
		highlights: {
			title: 'Program Highlights',
			subtitle: 'Hands-on data analysis training with real projects',
			items: [
				'Learn Python, Pandas & NumPy',
				'Create data visualizations',
				'Build machine learning models',
				'Deploy data apps with Streamlit',
			],
		},
		duration: '1-2 Months',
		level: 'Beginner to Intermediate',
	};

	return (
		<main>
			<Hero {...heroProps} />
			<div className='mb-12 mt-12'>
				<Program {...oneMonthProgram} />
			</div>
			<div className='mb-12'>
				<Program {...twoMonthProgram} />
			</div>
		</main>
	);
};

export default page;
