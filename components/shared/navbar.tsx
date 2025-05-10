"use client"
import { IconMenu2, IconX, IconCode, IconDatabase, IconRobot, IconBrain, IconDeviceSim, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import Logo from "./Logo"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const toggleResources = () => setResourcesOpen(prev => !prev)

  const closeMenus = () => {
    setIsMenuOpen(false)
    setResourcesOpen(false)
  }

  const renderNavLink = (href: string, text: string, isExternal = false, onClick = closeMenus) => (
    <Link 
      href={href} 
      className="hover:text-light-primary transition-colors flex items-center gap-1"
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {text}
        </Link>
  )

  const renderDropdownIcon = () => (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )

  const internshipOptions = [
    { path: "/internship/web-development", label: "Web Development", icon: <IconCode size={18} /> },
    { path: "/internship/data-science", label: "Data Science", icon: <IconDatabase size={18} /> },
    { path: "/internship/ai-web", label: "AI-first Web Development", icon: <IconRobot size={18} /> },
    { path: "/internship/ai-data", label: "AI-first Data Science", icon: <IconBrain size={18} /> },
    { path: "/internship/ai-agent", label: "AI Agent", icon: <IconDeviceSim size={18} /> }
  ]

  return (
		<nav className='bg-light-foreground text-light-background fixed w-full z-50 top-0 left-0'>
			<div className='container mx-auto px-4 py-3 max-w-7xl'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<Link
							href='/'
							className='flex items-center gap-2'
						>
							<Logo />
						</Link>

						{/* Desktop Menu */}
						<div className='hidden md:flex items-center gap-8 ml-8'>
							{renderNavLink('/', 'Home')}
							<div className='relative'>
								<button
									onClick={toggleResources}
									onMouseEnter={() => setResourcesOpen(true)}
									className='flex items-center gap-1 hover:text-light-primary transition-colors'
								>
									Internships
									{renderDropdownIcon()}
								</button>
								{resourcesOpen && (
									<div
										className='absolute top-full -left-1/2 mt-2 bg-light-foreground/70 backdrop-blur-sm rounded-md shadow-lg py-2 z-[100] min-w-40 w-68'
										onMouseEnter={() => setTimeout(() => setResourcesOpen(true), 200)}
										onMouseLeave={() => setResourcesOpen(false)}
									>
										<ul className='flex flex-col'>
											{internshipOptions.map((item, index) => (
												<li key={index}>
													<Link
														href={item.path}
														className='flex items-center gap-2 px-4 py-2 text-light-background group  '
														onClick={() => setResourcesOpen(false)}
													>
														<div className='bg-light-accent/10 group-hover:bg-white rounded-md group-hover:text-light-accent p-2 transition-colors'>
															{item.icon}
														</div>
														<span>{item.label}</span>
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
							{renderNavLink('https://konnectup.ai', 'Job Portal', true)}
						</div>
					</div>

					{/* Get Started Button - Desktop */}
					<div className='hidden md:block'>
						<Link
							href='/get-started'
							className='h-11 rounded-md text-sm  font-medium items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-md  py-1 w-full justify-center transition-all duration-200 active:scale-95 active:shadow-inner active:translate-y-0.5 hover:brightness-110 hover:scale-[0.98]  active:scale-[0.97] active:[box-shadow:0_0_0_1px_hsl(210deg_22%_90%),_inset_0_1px_1px_hsl(210,_10%,_68%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 hidden md:flex px-4'
						>
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className='flex items-center gap-4 md:hidden'>
						<button
							className='text-light-background'
							onClick={toggleMenu}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? (
								<IconX
									size={24}
									stroke={2}
								/>
							) : (
								<IconMenu2
									size={24}
									stroke={2}
								/>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='md:hidden py-4 space-y-3'>
						<Link
							href='/'
							className='block hover:text-light-primary transition-colors py-2'
							onClick={closeMenus}
						>
							Home
						</Link>
						<div>
							<button
								onClick={toggleResources}
								className='flex items-center gap-1 hover:text-light-primary transition-colors py-2 w-full text-left'
							>
								Resources
								<svg
									width='12'
									height='12'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className={`transition-transform duration-200 ml-1 ${
										resourcesOpen ? 'rotate-180' : ''
									}`}
								>
									<polyline points='6 9 12 15 18 9'></polyline>
								</svg>
							</button>
							{resourcesOpen && (
								<div className='pl-4 mt-1 space-y-2'>
									{internshipOptions.map((item, index) => (
										<Link
											key={index}
											href={item.path}
											className='flex items-center gap-2 hover:text-light-primary transition-colors py-1'
											onClick={closeMenus}
										>
											{item.icon}
											<span>{item.label}</span>
										</Link>
									))}
								</div>
							)}
						</div>
						<Link
							href='https://konnectup.ai'
							className='flex items-center gap-1 hover:text-light-primary transition-colors py-2'
							onClick={closeMenus}
							target="_blank"
							rel="noopener noreferrer"
						>
							Job Portal
							<IconExternalLink size={14} />
						</Link>
						<Link
							href='/get-started'
							className='block hover:text-light-primary transition-colors py-2'
							onClick={closeMenus}
						>
							Get Started
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar