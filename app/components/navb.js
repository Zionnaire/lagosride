'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function NBar() {
	const [nav, setNav] = useState(false);

	return (
		<>
			<header className='w-full'>
				<nav className='max-w-6xl p-4 mx-auto'>
					{/* desktop nav */}
					<div>
						<div className='flex justify-between items-baseline'>
							{/* logo */}
							<Link href={''}>
								<img className='w-[10rem]' src='/logo.png' alt='' />
							</Link>

							{/* links */}
							<div className='hidden md:block'>
								<ul className='flex md:gap-5 lg:gap-7 items-center font-medium lg:font-normal text-xs lg:text-base text-textBlue'>
									<li>
										<Link href={''}>Home</Link>
									</li>
									<li>
										<Link href={''}>Search trips</Link>
									</li>
									<li>
										<Link href={''}>How to use</Link>
									</li>
									<li>
										<Link href={''}>News & Events</Link>
									</li>
									<li>
										<Link href={''}>Blog</Link>
									</li>
									<li>
										<Link href={''}>Gallery</Link>
									</li>
									<li className='py-2 px-5 bg-gradient-to-t from-lBlue to-green text-white rounded-lg'>
										<Link href={''}>Join to drive</Link>
									</li>
								</ul>
							</div>

							<div className='md:hidden'>
								<div
									onClick={() => setNav(true)}
									className=' hover:animate-pulse cursor-pointer'>
									<HiMenuAlt3 size={30} />
								</div>
							</div>
						</div>
					</div>
					{/* mobile nav */}
					<div className={nav ? 'md:hidden relative' : ''}>
						<div
							className={
								nav
									? 'fixed left-0 top-0 w-full h-screen z-[99999] text-textBlue bg-white p-4 ease-in duration-500'
									: 'fixed left-0 top-[-120vh] w-full h-screen z-[99999] text-textBlue bg-white p-4 ease-out duration-500'
							}>
							{/* logo */}
							<div className='flex justify-between items-center'>
								{/* logo */}
								<Link href={''}>
									<img className='w-[10rem]' src='/logo.png' alt='' />
								</Link>

								{/* close */}
								<div className='cursor-pointer' onClick={() => setNav(false)}>
									<HiX size={30} />
								</div>
							</div>

							{/* links */}
							<div className=''>
								<ul className='text-textBlue'>
									<li>
										<Link href={''}>Home</Link>
									</li>
									<li>
										<Link href={''}>Search trips</Link>
									</li>
									<li>
										<Link href={''}>How to use</Link>
									</li>
									<li>
										<Link href={''}>News & Events</Link>
									</li>
									<li>
										<Link href={''}>Blog</Link>
									</li>
									<li>
										<Link href={''}>Gallery</Link>
									</li>
									<li className=' w-fit py-2 px-5 bg-gradient-to-t from-lBlue to-green text-white rounded-lg'>
										<Link href={''}>Join to drive</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
