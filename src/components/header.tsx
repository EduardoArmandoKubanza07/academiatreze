import Link from 'next/link';
import { WrapperContent } from './wrapperContent';

export default function Header() {
	return (
		<header className='bg-white shadow-md w-full fixed top-0 left-0 right-0 z-50 flex flex-col'>
			<div className='bg-purple-600 text-white text-center py-2'>
				<p>
					🌟 Estamos Construindo algo Incrível! 🚀 Fique Ligado, a Plataforma
					está em Desenvolvimento! 🔧✨ Academia 13
				</p>
			</div>
			<WrapperContent>
				<div className='w-full flex items-center justify-between h-24 '>
					<Link href='/' className='flex items-center space-x-2'>
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
						<Link href='/formulario'>
							<button className='text-white bg-purple-600 rounded-md shadow-md py-3 px-6 hover:bg-purple-700 transition-colors cursor-pointer'>
								Acessar Formulário
							</button>
						</Link>
					</div>
				</div>
			</WrapperContent>
		</header>
	);
}
