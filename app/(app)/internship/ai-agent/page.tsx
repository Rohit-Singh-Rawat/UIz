import { Metadata } from 'next';
import Hero from '@/components/internship/shared/Hero';
import Program from '@/components/internship/shared/program';

export const metadata: Metadata = {
	title: 'AI Agent Development Internship | LinkVerse',
	description:
		'Build intelligent AI agents using LLMs, LangChain, and modern AI tooling. Learn to create conversational interfaces, RAG systems, and autonomous agents.',
	keywords: [
		'AI agent',
		'LLM',
		'LangChain',
		'RAG',
		'internship',
		'autonomous agents',
		'chatbot development',
		'prompt engineering',
	],
};

const KeyConcepts = () => {
	const concepts = [
		'Foundation of AI agents and their architecture',
		'Prompt engineering techniques for LLM-based agents',
		'Building chatbots and conversational interfaces',
		'Retrieval-Augmented Generation (RAG) systems',
		'Autonomous agent design and deployment',
		'Best practices for AI safety and security',
	];

	return (
		<section className='py-16 bg-gradient-to-b from-light-background to-gray-50'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full'>
						Core Knowledge
					</span>
					<h2 className='text-3xl font-medium mt-3'>Key Concepts You&apos;ll Master</h2>
				</div>

				<div className='max-w-3xl mx-auto'>
					<div className='bg-white rounded-lg shadow-sm p-8 border border-gray-200'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{concepts.map((concept, index) => (
								<div
									key={index}
									className='flex items-center'
								>
									<div className='bg-gray-800 text-white w-8 h-8 rounded flex items-center justify-center mr-3 flex-shrink-0'>
										{index + 1}
									</div>
									<p className='text-gray-800 font-medium mt-1'>{concept}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Technologies = () => {
	const tools = [
		{
			category: 'Programming',
			items: ['Python', 'RESTful APIs', 'JSON/YAML'],
		},
		{
			category: 'LLM APIs',
			items: ['OpenAI', 'Cohere', 'Anthropic (optional)'],
		},
		{
			category: 'Frameworks',
			items: ['LangChain', 'Streamlit', 'Gradio'],
		},
		{
			category: 'Vector DBs',
			items: ['Chroma', 'Pinecone', 'FAISS'],
		},
		{
			category: 'Hosting',
			items: ['Streamlit Cloud', 'Hugging Face Spaces', 'Vercel'],
		},
	];

	return (
		<section className='py-16 bg-light-background'>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='text-center mb-10'>
					<span className='bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full'>
						Technical Stack
					</span>
					<h2 className='text-3xl font-medium mt-3'>Tools and Technologies</h2>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{tools.map((category, index) => (
							<div
								key={index}
								className='bg-white rounded-lg shadow-sm overflow-hidden'
							>
								<div className='bg-gray-800 text-white py-3 px-4'>
									<h3 className='text-lg font-medium'>{category.category}</h3>
								</div>
								<div className='p-4'>
									<ul className='space-y-2'>
										{category.items.map((item, itemIndex) => (
											<li
												key={itemIndex}
												className='flex items-center'
											>
												<div className='w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse'></div>
												<span>{item}</span>
											</li>
										))}
									</ul>
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
	const oneMonthProgram = {
		title: 'AI Agent Development',
		time: '1-Month Program (20 Days)',
		goal: 'Goal: Learn to build intelligent AI agents using LLMs and modern tooling',
		weeks: [
			{
				title: 'Foundations of AI Agents',
				days: [
					{ day: 1, title: 'What is an AI Agent?' },
					{ day: 2, title: 'Types: Rule-based, ML-based, LLM-based agents' },
					{ day: 3, title: 'Agent architecture overview (Perception → Planning → Action)' },
					{ day: 4, title: 'Key concepts: Prompt engineering, context windows, memory' },
					{ day: 5, title: 'Tools: OpenAI API, LangChain basics, Python review' },
				],
			},
			{
				title: 'Building Chatbots with LLMs',
				days: [
					{ day: 6, title: 'Intro to Large Language Models (LLMs)' },
					{ day: 7, title: 'Prompting Techniques: Zero-shot, few-shot, chain-of-thought' },
					{ day: 8, title: 'LangChain Core Concepts: Chains' },
					{ day: 9, title: 'Tools and Agents in LangChain' },
					{ day: 10, title: 'Chat Memory and State Retention' },
				],
			},
			{
				title: 'Retrieval-Augmented Generation (RAG)',
				days: [
					{ day: 11, title: 'Introduction to Vector Databases (Pinecone, Chroma)' },
					{ day: 12, title: 'Embeddings and Semantic Search' },
					{ day: 13, title: 'Connecting RAG pipelines using LangChain' },
					{ day: 14, title: 'Use-case design: Personalized assistant' },
					{ day: 15, title: 'Use-case design: Document QA bot' },
				],
			},
			{
				title: 'Autonomous Agents & Deployment',
				days: [
					{ day: 16, title: 'Intro to Autonomous Agents (Auto-GPT, BabyAGI concepts)' },
					{ day: 17, title: 'Planning & Task Decomposition' },
					{ day: 18, title: 'Agent Memory and Tool Use' },
					{ day: 19, title: 'Deployment on Streamlit Cloud or HuggingFace Spaces' },
					{ day: 20, title: 'Ethics, risks, and prompt injection safety' },
				],
			},
		],
	};

	const heroProps = {
		title: 'AI Agent Development Internship',
		description: 'Build intelligent AI agents using LLMs, LangChain, and modern AI tooling',
		highlights: {
			title: 'Program Highlights',
			subtitle: 'Create production-ready AI systems',
			items: [
				'Design conversational AI agents',
				'Build RAG systems for knowledge retrieval',
				'Create autonomous task-performing agents',
				'Deploy AI systems to production',
			],
		},
		duration: '1 Month',
		level: 'Intermediate',
	};

	return (
		<main>
			<Hero {...heroProps} />
			<div className='mb-12 mt-12'>
				<Program {...oneMonthProgram} />
			</div>
			<KeyConcepts />
			<Technologies />
		</main>
	);
};

export default page;
