'use client';
import Link from 'next/link';
import { WrapperContent } from './wrapperContent';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
	const [showBanner, setShowBanner] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== 'undefined') {
				if (window.scrollY > lastScrollY) {
					setShowBanner(false);
				} else {
					setShowBanner(true);
				}
				setLastScrollY(window.scrollY);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<header className='bg-white shadow-md w-full fixed top-0 left-0 right-0 z-50 flex flex-col'>
			{showBanner && (
				<div className='bg-purple-600 text-white text-center py-2 transition-all duration-300'>
					<p>
						🌟 Estamos Construindo algo Incrível! 🚀 Fique Ligado, a Plataforma
						está em Desenvolvimento! 🔧✨ Academia 13
					</p>
				</div>
			)}

			<WrapperContent>
				<div className='w-full flex items-center justify-between h-16 sm:h-24'>
					<Link href='/' className='flex items-center space-x-2 sm:hidden'>
						<span className='text-xl sm:text-2xl font-bold text-purple-600'>
							A 13
						</span>
					</Link>

					<Link href='/' className='hidden sm:flex items-center space-x-2'>
						<span className='text-xl sm:text-2xl font-bold text-purple-600'>
							Academia 13
						</span>
					</Link>

					<div className='flex items-center h-full gap-6'>
						<nav className='hidden md:flex space-x-6'>
							<Link
								href='#features'
								className='hover:text-purple-600 transition'
							>
								Benefícios
							</Link>
							<Link href='#about' className='hover:text-purple-600 transition'>
								Sobre Nós
							</Link>
						</nav>

						<div className='md:hidden'>
							<button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className='text-purple-600 cursor-pointer hover:text-purple-800 transition'
							>
								<Menu size={28} />
							</button>
						</div>

						<Link href='/formulario' className='hidden md:inline-block'>
							<button className='text-white bg-purple-600 rounded-md shadow-md py-3 px-6 hover:bg-purple-700 transition-colors cursor-pointer'>
								Acessar Formulário
							</button>
						</Link>
					</div>
				</div>
			</WrapperContent>

			{mobileMenuOpen && (
				<div className='md:hidden bg-white shadow-md'>
					<WrapperContent>
						<nav className='flex flex-col py-4 space-y-2'>
							<Link href='#features' className='px-4 py-2 hover:bg-gray-100'>
								Benefícios
							</Link>
							<Link href='#about' className='px-4 py-2 hover:bg-gray-100'>
								Sobre Nós
							</Link>
							<Link href='/formulario' className='px-4 py-2 hover:bg-gray-100'>
								Acessar Formulário
							</Link>
						</nav>
					</WrapperContent>
				</div>
			)}
		</header>
	);
}
