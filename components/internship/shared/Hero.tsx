interface HeroProps {
	title?: string;
	description?: string;
	highlights?: {
		title?: string;
		subtitle?: string;
		items?: string[];
	};
	duration?: string;
	level?: string;
	buttonText?: string;
	buttonLink?: string;
}

const Hero = ({
	title = 'Web Development Internship',
	description = 'Learn to build and deploy responsive websites with HTML, CSS, and JavaScript',
	highlights = {
		title: 'Program Highlights',
		subtitle: 'Complete hands-on training with live projects',
		items: [
			'Master HTML, CSS & JavaScript',
			'Build & host multiple websites',
			'Create a professional portfolio',
			'Get internship certificate & LOR',
		],
	},
	duration = '1-3 Months',
	level = 'Beginner to Intermediate',
	buttonText = 'Apply Now',
	buttonLink = '#',
}: HeroProps) => {
	return (
		<section className='bg-light-foreground relative min-h-[100svh]'>
			<div className='absolute inset-0 container border-b border-white/5 mx-auto bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_10px)] mask-radial-at-center'>
				<div className='absolute inset-0 bg-gradient-to-r via-35% from-light-foreground via-transparent to-light-foreground z-0'></div>
				{/* Responsive gradient blobs with different positions based on screen size */}
				<div className='absolute top-1/4 -left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-light-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse'></div>
				<div className='absolute bottom-1/3 right-0 sm:right-5 md:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-light-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse'></div>
				<div className='absolute top-2/3 left-1/4 md:left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-dark-accent/20 rounded-full filter blur-3xl opacity-30 animate-pulse'></div>
				<div className='hidden sm:block absolute bottom-1/4 left-1/2 w-32 h-32 bg-light-primary/30 rounded-full filter blur-3xl opacity-20 animate-pulse'></div>
			</div>
			<div className='container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 min-h-[100svh] flex items-center justify-center z-10 relative'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full'>
					<div className='w-full md:w-1/2 flex flex-col gap-4 sm:gap-6'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-medium text-white'>{title}</h1>
						<p className='text-white/50 text-base sm:text-lg'>{description}</p>
						<a
							href={buttonLink}
							className='bg-accent/10 text-white/60 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md border border-white/10 hover:bg-white/20 transition-all duration-300 w-fit text-sm sm:text-base'
						>
							{buttonText}
						</a>
					</div>

					<div className='w-full lg:w-1/2 mt-8 md:mt-0'>
						<div className='p-1.5 sm:p-2 border bg-light-foreground border-white/10 rounded-2xl'>
							<div className='p-4 sm:p-6 bg-[#1a243a] backdrop-blur-sm rounded-lg border border-white/10 shadow-xl'>
								<div className='space-y-4 sm:space-y-6'>
									<div className='border-l-4 border-accent pl-3 sm:pl-4'>
										<h3 className='text-lg sm:text-xl font-medium text-white'>{highlights.title}</h3>
										<p className='text-white/60 text-xs sm:text-sm'>{highlights.subtitle}</p>
									</div>

									<ul className='space-y-2 sm:space-y-3'>
										{highlights.items?.map((item, index) => (
											<li
												key={index}
												className='flex items-start gap-2'
											>
												<span className='text-accent mt-0.5'>✓</span>
												<span className='text-white/80 text-sm sm:text-base'>{item}</span>
											</li>
										))}
									</ul>

									<div className='grid grid-cols-2 gap-3 sm:gap-4 pt-2'>
										<div>
											<p className='text-white/50 text-xs'>Duration</p>
											<p className='text-white font-medium text-sm sm:text-base'>{duration}</p>
										</div>
										<div>
											<p className='text-white/50 text-xs'>Level</p>
											<p className='text-white font-medium text-sm sm:text-base'>{level}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
