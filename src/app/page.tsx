import { WrapperContent } from '@/components/wrapperContent';
import Link from 'next/link';
import { student } from '@/images';
import Image from 'next/image';

const services = [
	{
		title: 'Mentoria Personalizada',
		description: 'Acesso a orientadores especializados no seu tema.',
		icon: '🧑‍🏫',
	},
	{
		title: 'Cursos Intensivos',
		description: 'Formações em programação, redes e metodologia.',
		icon: '📚',
	},
	{
		title: 'Comunidade Activa',
		description: 'Rede de alunos e ex-alunos para colaboração.',
		icon: '👥',
	},
];

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			<section className='bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20'>
				<WrapperContent>
					<div className='text-center md:text-left md:flex items-center justify-between'>
						<div className='md:w-1/2 space-y-6'>
							<h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>
								Transforme seu TCC em um projecto de sucesso!
							</h1>
							<p className='text-xl text-blue-100'>
								A Academia 13 te ajuda desde a escolha do tema até a
								apresentação final.
							</p>
							<Link
								href='/formulario'
								className='inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-100 transition shadow-lg'
							>
								Quero Participar
							</Link>
						</div>
						<div className='hidden md:block'>
							<Image
								src={student}
								alt='Student Academia 13'
								width={400}
								height={500}
							/>
						</div>
					</div>
				</WrapperContent>
			</section>

			<section id='features' className='py-16 bg-white'>
				<WrapperContent>
					<h2 className='text-2xl font-bold text-center text-purple-600 mb-8'>
						Como a Academia 13 te ajuda?
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{services.map((feature, index) => (
							<div
								key={index}
								className='bg-blue-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition'
							>
								<span className='text-4xl'>{feature.icon}</span>
								<h3 className='text-xl font-bold mt-4 text-purple-600'>
									{feature.title}
								</h3>
								<p className='mt-2 text-gray-600'>{feature.description}</p>
							</div>
						))}
					</div>
				</WrapperContent>
			</section>

			<section className='bg-blue-50 py-12'>
				<WrapperContent>
					<div className='text-center'>
						<h2 className='text-2xl font-bold text-purple-600'>
							Pronto para levar seu TCC ao próximo nível?
						</h2>
						<Link
							href='/formulario'
							className='mt-6 inline-block text-white bg-purple-600 rounded-md shadow-md py-3 px-6 hover:bg-purple-700 transition-colors cursor-pointer'
						>
							Acessar Formulário
						</Link>
					</div>
				</WrapperContent>
			</section>

			{/* Footer Simples */}
			<footer className='bg-purple-600 text-white py-2'>
				<WrapperContent>
					<div className='text-center flex items-center justify-center flex-wrap gap-4'>
						<p>
							© {new Date().getFullYear()} Academia 13. Todos os direitos
							reservados.
						</p>
						<p className='mt-1 flex items-center gap-1'>
							Contacto:
							<a
								href='mailto:edukubanza17@gmail.com'
								className='text-white hover:underline'
							>
								edukubanza17@gmail.com
							</a>
						</p>
					</div>
				</WrapperContent>
			</footer>
		</div>
	);
}
