import { cn } from '@/lib/utils';
import { GridPattern } from '../magicui/grid-pattern';
import Image from 'next/image';
import homeHero from '@/public/images/homeHero.png';
const hero = () => {
	return (
		<section className='bg-dark-background min-h-screen pt-10 overflow-hidden w-full'>
			<GridPattern
				width={100}
				height={100}
				className={cn('inset-0 stroke-blue-300/10')}
			/>
			<div className='absolute overflow-hidden inset-0 z-10'>
				{/* Blue blur blob at top right - more spread, lighter opacity, gradient effect */}
				<div className='absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3' />

				{/* Yellow blur blob at top right - more spread, lighter opacity, gradient effect */}
				<div className='absolute top-10 right-20 w-[25rem] h-[25rem] bg-gradient-to-tr from-yellow-400/15 to-amber-300/5 rounded-full blur-[120px]' />

				{/* Violet blur blob at bottom left - more spread, lighter opacity, gradient effect */}
				<div className='absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-violet-600/15 to-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3' />
			</div>
			<div className='container mx-auto px-4 py-16 max-w-7xl '>
				<div className='flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative'>
					<div className='md:w-1/2'>
						<h1 className='text-4xl md:text-6xl font-medium mb-4 text-white'>
							{' '}
							Unlock career possibilities with the right guidance, tools and network
						</h1>

						<p className='text-white/80 text-lg mb-8 max-w-xl'>
							Connect with mentors, access resources, and build your professional network all in one
							place.
						</p>
						<div className='flex gap-4 '>
							<button className='bg-light-primary text-light-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-light-primary/90 transition-colors shadow-lg cursor-pointer'>
								Get Started
							</button>
							<button className='bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors cursor-pointer'>
								Learn More
							</button>
						</div>
					</div>
					<div className='md:w-1/2 relative'>
						<div className='relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm p-3'>
							<Image
								src={homeHero}
								alt='Career guidance and networking'
								className='object-cover size-full rounded-md'
								priority
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-dark-background/80 to-transparent'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default hero;
