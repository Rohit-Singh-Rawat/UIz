import { Marquee } from "../magicui/marquee";

const KnowAll = () => {
	return (
		<div>
			<section className='bg-blue-50 container mx-auto max-w-7xl my-20 md:my-40 rounded-2xl p-6 md:p-12 lg:p-20 min-h-screen flex flex-col lg:flex-row gap-6 md:gap-10'>
				<div className='flex flex-col w-full lg:w-1/3 mb-8 lg:mb-0'>
					<p className='font-light text-sm'>Details</p>
					<h1 className='text-3xl md:text-4xl font-medium'>know Us all</h1>
				</div>
				<div className='w-full lg:w-2/3'>
					<div>
						<h1 className='text-xl md:text-2xl font-medium ml-0 md:ml-6'>Why choose LinkVerse</h1>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className='flex items-start gap-2'
								>
									<CheckIcon className='h-5 w-5 shrink-0 mt-1' />
									<p className='text-sm md:text-base'>{benefit}</p>
								</div>
							))}
						</div>
					</div>
					<div className='mt-8 md:mt-10 ml-0 md:ml-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4'>
							{informationItems.map((item, index) => (
								<div key={index} className='mb-4 md:mb-0'>
									<h1 className='text-xl md:text-2xl font-medium'>{item.title}</h1>
									<p className='text-sm md:text-base'>{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
      <div className="bg-blue-600 text-white py-3">
        <Marquee>
          <div className="flex items-center">
            <span className="text-base md:text-lg font-bold mx-2 md:mx-4">🚀 ACT FAST – LIMITED SEATS AVAILABLE! APPLY NOW TO SECURE YOUR SPOT! 🚀</span>
            <span className="text-base md:text-lg font-bold mx-2 md:mx-4">🚀 ACT FAST – LIMITED SEATS AVAILABLE! APPLY NOW TO SECURE YOUR SPOT! 🚀</span>
            <span className="text-base md:text-lg font-bold mx-2 md:mx-4">🚀 ACT FAST – LIMITED SEATS AVAILABLE! APPLY NOW TO SECURE YOUR SPOT! 🚀</span>
          </div>
        </Marquee>
      </div>
		</div>
	);
};

const CheckIcon = ({ className }: { className?: string }) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		className={className} 
		viewBox="0 0 24 24" 
		stroke="currentColor" 
		fill="none" 
		strokeLinecap="round" 
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
		<path d="M5 12l5 5l10 -10" />
	</svg>
);

const benefits = [
	"Choose your preferred domain and gain practical, hands-on experience",
	"Get a training completion certificate co-branded with reputed organizations",
	"Receive an internship certificate for your real-world project contributions",
	"Earn a Letter of Recommendation or Outstanding Performance Certificate",
	"Work on live, industry-grade projects that boost your resume",
	"Access placement assistance for top performers",
	"Get mentored by professionals from Google, Microsoft, Bosch, Cisco, and more"
];

const informationItems = [
	{
		title: "Branches",
		description: "Open to students from all branches and departments"
	},
	{
		title: "Prerequisites",
		description: "No prior experience needed – we train you from the basics"
	},
	{
		title: "Slots",
		description: "Limited slots – based on first-come, first-served"
	},
	{
		title: "Schedule",
		description: "Designed to not interfere with college academics or exams"
	},
	{
		title: "Certification",
		description: "Complete Training + Internship Certificate and LOR Included"
	},
	{
		title: "Portfolio",
		description: "A Job-Ready Resume and Portfolio will be made"
	},
	{
		title: "Job Support",
		description: "Job Assistance through the Konnectup.ai Platform"
	}
];

export default KnowAll;
