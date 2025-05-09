import Hero from '@/components/internship/shared/Hero';
import Program from '@/components/internship/shared/program';

const LearningOutcomes = () => {
	const outcomes = [
		'Proficiency in Python for data analysis and machine learning',
		'Mastery of NumPy, Pandas, Matplotlib, and Seaborn',
		'Ability to handle real datasets: cleaning, processing, analyzing',
		'Understand and apply machine learning algorithms (Linear & Logistic Regression, KNN, Decision Trees)',
		'Build ML models and evaluate them using real-world data',
		'Create and deploy AI-powered apps using Streamlit',
		'Use AI tools (e.g., ChatGPT, Gemini, Claude) for data interpretation, debugging, and automation',
	];

	return (
		<section className='py-16 bg-gradient-to-b from-light-background to-indigo-50'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full'>
						What You&apos;ll Achieve
					</span>
					<h2 className='text-3xl font-medium mt-3'>Learning Outcomes</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='bg-white rounded-lg shadow-sm p-6 border border-indigo-100'>
						<p className='text-gray-700 mb-4'>
							By the end of this course, students will be able to:
						</p>
						<ul className='space-y-3'>
							{outcomes.map((outcome, index) => (
								<li
									key={index}
									className='flex items-start'
								>
									<span className='inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-sm mr-3 mt-0.5 flex-shrink-0'>
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

const Projects = () => {
	const projects = [
		'COVID-19 Dataset Analysis (Pandas/Matplotlib)',
		'College Admission Trend Visualizer',
		'House Price Prediction Model',
		'Resume Classifier using Machine Learning',
		'AI Career Advisor Web App (deployed via Streamlit)',
	];

	return (
		<section className='py-16 bg-light-background'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full'>
						Portfolio Building
					</span>
					<h2 className='text-3xl font-medium mt-3'>Projects You&apos;ll Build</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='grid grid-cols-1 gap-4'>
						{projects.map((project, index) => (
							<div
								key={index}
								className='bg-white rounded-lg p-5 hover:shadow-sm transition-shadow'
							>
								<div className='flex items-center'>
									<span className='text-purple-700 text-sm font-medium mr-3'>0{index + 1}</span>
									<h3 className='text-gray-800 font-medium'>{project}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const CareerReadiness = () => {
	const deliverables = [
		'A Job-Ready Resume tailored for data science roles (via ChatGPT)',
		'A personal data science portfolio with hosted project links',
		'Profile setup on GitHub, Kaggle, and LinkedIn',
		'Job assistance via Konnectup.ai, including real job listings, interview preparation, and mock tests',
	];

	return (
		<section className='py-16 bg-gradient-to-b from-light-background to-emerald-50'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full'>
						Career Ready
					</span>
					<h2 className='text-3xl font-medium mt-3'>Career-Readiness Deliverables</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
						{deliverables.map((item, index) => (
							<div
								key={index}
								className='bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-emerald-100'
							>
								<div className='flex flex-col h-full'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
												className='text-emerald-700'
											>
												<polyline points='20 6 9 17 4 12'></polyline>
											</svg>
										</div>
										<h3 className='text-gray-800 font-medium'>Deliverable {index + 1}</h3>
									</div>
									<p className='text-gray-700'>{item}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const page = () => {
	const threeMonthProgram = {
		title: 'AI-first Data Science',
		time: '3-Month Program (60 Days)',
		goal: 'Goal: Master Python and data analysis skills using AI assistance tools',
		weeks: [
			{
				title: 'Python Programming Basics',
				days: [
					{ day: 1, title: 'Variables & Data Types' },
					{ day: 2, title: 'Loops & Conditionals' },
					{ day: 3, title: 'Functions & Error Handling' },
					{ day: 4, title: 'Python Mini Project' },
					{ day: 5, title: 'AI Tool: ChatGPT Python Tutor for explanations' },
				],
			},
			{
				title: 'Numpy and Pandas',
				days: [
					{ day: 6, title: 'Array & DataFrame Manipulation' },
					{ day: 7, title: 'Data Selection & Filtering' },
					{ day: 8, title: 'Reading/Writing CSVs' },
					{ day: 9, title: 'Data Cleaning & Transformation' },
					{ day: 10, title: 'Mini Project: COVID-19 Dataset Analysis' },
				],
			},
			{
				title: 'Data Visualization',
				days: [
					{ day: 11, title: 'Matplotlib Basics' },
					{ day: 12, title: 'Seaborn & Advanced Plots' },
					{ day: 13, title: 'Creating charts, plots, heatmaps' },
					{ day: 14, title: 'Interactive Visualization' },
					{ day: 15, title: 'Project: Visualize College Admission Trends' },
				],
			},
			{
				title: 'Introduction to Machine Learning',
				days: [
					{ day: 16, title: 'ML Concepts & Workflow' },
					{ day: 17, title: 'Supervised Learning (Linear Regression)' },
					{ day: 18, title: 'Model Training & Evaluation' },
					{ day: 19, title: 'Project: House Price Predictor' },
					{ day: 20, title: 'AI Tool: Scikit-learn + ChatGPT for tuning' },
				],
			},
			{
				title: 'Classification Models',
				days: [
					{ day: 21, title: 'Classification Concepts' },
					{ day: 22, title: 'Logistic Regression' },
					{ day: 23, title: 'K-Nearest Neighbors (KNN)' },
					{ day: 24, title: 'Confusion Matrix, Accuracy' },
					{ day: 25, title: 'Model Comparison & Selection' },
				],
			},
			{
				title: 'Decision Trees + Preprocessing',
				days: [
					{ day: 26, title: 'Decision Trees Basics' },
					{ day: 27, title: 'Random Forests' },
					{ day: 28, title: 'Feature Engineering' },
					{ day: 29, title: 'Data Cleaning & Preprocessing' },
					{ day: 30, title: 'Cross-Validation Techniques' },
				],
			},
			{
				title: 'Resume Classification Project',
				days: [
					{ day: 31, title: 'Natural Language Preprocessing' },
					{ day: 32, title: 'Text Feature Engineering' },
					{ day: 33, title: 'Building Classification Model' },
					{ day: 34, title: 'Model Tuning & Improvement' },
					{ day: 35, title: 'Final Project: Resume Classifier using ML' },
				],
			},
			{
				title: 'ML App Basics',
				days: [
					{ day: 36, title: 'Introduction to Streamlit' },
					{ day: 37, title: 'Building Interactive UI' },
					{ day: 38, title: 'Integrating ML Models with Streamlit' },
					{ day: 39, title: 'Testing & Debugging Apps' },
					{ day: 40, title: 'Deploy ML model to Streamlit Cloud' },
				],
			},
			{
				title: 'Streamlit Deep Dive',
				days: [
					{ day: 41, title: 'Advanced Layouts & Components' },
					{ day: 42, title: 'Interactive Widgets & Forms' },
					{ day: 43, title: 'Data Visualization in Streamlit' },
					{ day: 44, title: 'Session State & Caching' },
					{ day: 45, title: 'Hosting Options & Best Practices' },
				],
			},
			{
				title: 'Project Planning',
				days: [
					{ day: 46, title: 'Define ML App Use Case' },
					{ day: 47, title: 'Data Requirements & Collection' },
					{ day: 48, title: 'Design ML Pipeline' },
					{ day: 49, title: 'Build UI First Approach' },
					{ day: 50, title: 'AI Tool: ChatGPT for design suggestions' },
				],
			},
			{
				title: 'ML-Powered Career Advisor',
				days: [
					{ day: 51, title: 'Building Dataset of Career Paths' },
					{ day: 52, title: 'Training Classification Model' },
					{ day: 53, title: 'Integrate ML with Streamlit' },
					{ day: 54, title: 'Adding AI Responses for Career Path' },
					{ day: 55, title: 'Testing & User Feedback' },
				],
			},
			{
				title: 'Final Deployment',
				days: [
					{ day: 56, title: 'Final App Polishing' },
					{ day: 57, title: 'Deploy to Streamlit Cloud' },
					{ day: 58, title: 'GitHub Documentation' },
					{ day: 59, title: 'Portfolio Integration' },
					{ day: 60, title: 'Final Project Presentation' },
				],
			},
		],
	};

	const heroProps = {
		title: 'AI-First Data Science Internship',
		description: 'Learn to analyze data, build ML models, and deploy apps with AI assistance',
		highlights: {
			title: 'Program Highlights',
			subtitle: 'Data Science powered by AI tools',
			items: [
				'Master Python with AI-powered learning',
				'Build real-world ML models with assistance',
				'Create data visualization with AI tools',
				'Deploy ML apps with Streamlit',
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
			<Projects />
			<CareerReadiness />
		</main>
	);
};

export default page;
