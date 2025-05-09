'use client';
import { useState } from 'react';

interface ProgramWeek {
	title: string;
	days: {
		day: number;
		title: string;
	}[];
}

interface ProgramProps {
	title?: string;
	weeks?: ProgramWeek[];
	time?: string;
}

// Week component that manages its own state
const Week = ({ week, index }: { week: ProgramWeek; index: number }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleWeek = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='overflow-hidden'>
			<button
				onClick={toggleWeek}
				className='px-6 py-6 w-full flex justify-between items-center  dotted-spaced'
				
			>
				<div className='flex items-center'>
					<div className='bg-blue-50 shadow-inner shadow-blue-100 py-2 px-4 rounded flex items-center justify-center mr-4 flex-shrink-0'>
						<h3 className='text-sm text-left'>Week {index + 1}</h3>
					</div>
					<div className='text-sm font-medium'>{week.title}</div>
				</div>
				<svg
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
					strokeLinecap='round'
					strokeLinejoin='round'
					className={`transition-transform duration-200 text-black ${
						isOpen ? 'rotate-180' : ''
					}`}
				>
					<polyline points='6 9 12 15 18 9'></polyline>
				</svg>
			</button>

			{isOpen && (
				<div className='divide-y divide-light-border'>
					{week.days.map((day, dayIndex) => (
						<div
							key={dayIndex}
							className='px-6 py-6 flex items-center'
						>
							<span className='font-light text-sm'> {day.day}.</span>
							<p className='text-sm ml-2 '>{day.title}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const Program = ({
	title,
	time,
	weeks,
}: ProgramProps) => {
	return (
		<section className='py-16 '>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='flex flex-col gap-2 mb-10'>
					<p className='font-light'>{time}</p>
					<h3 className='text-4xl font-medium'>{title}</h3>
				</div>
				<div className=''>
					{weeks?.map((week, weekIndex) => (
						<Week
							key={weekIndex}
							week={week}
							index={weekIndex}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Program;
