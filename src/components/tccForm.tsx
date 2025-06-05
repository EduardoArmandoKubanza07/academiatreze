'use client';
import { useState } from 'react';
import { WrapperContent } from './wrapperContent';

type FormData = {
	// 1. Informações Pessoais
	nome: string;
	idade: string;
	email: string;
	whatsapp: string;
	municipio: string;
	genero: string;

	// 2. Informações Acadêmicas
	instituicao: string;
	curso: string;
	classe: string; // Pré-selecionado como "13ª classe"
	temaEscolhido: 'sim' | 'nao';
	tema?: string;
	temOrientador: 'sim' | 'nao';

	// 3. Desafios e Necessidades
	dificuldades: string[];
	tecnologias: string[];
	outraDificuldade?: string;
	outraTecnologia?: string;

	// 4. Interesse e Comprometimento
	interesseCursos: 'sim' | 'nao';
	interesseMentor: 'sim' | 'nao';
	interesseEstagio: 'sim' | 'nao';
	horasDedicacao: string;

	// 5. Feedback Livre
	expectativas: string;
	sugestoes: string;
};

export default function TCCValidationForm() {
	const [formData, setFormData] = useState<FormData>({
		nome: '',
		idade: '',
		email: '',
		whatsapp: '',
		municipio: '',
		genero: '',
		instituicao: '',
		curso: '',
		classe: '13ª classe',
		temaEscolhido: 'nao',
		tema: '',
		temOrientador: 'nao',
		dificuldades: [],
		tecnologias: [],
		outraDificuldade: '',
		outraTecnologia: '',
		interesseCursos: 'nao',
		interesseMentor: 'nao',
		interesseEstagio: 'nao',
		horasDedicacao: '',
		expectativas: '',
		sugestoes: '',
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;
		setFormData((prev) => {
			const currentList = prev[name as keyof FormData] as string[];
			const newList = checked
				? [...currentList, value]
				: currentList.filter((item) => item !== value);
			return { ...prev, [name]: newList };
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		console.log(formData);
		const response = await fetch('/api/submit-form', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});
		if (response.ok) alert('Obrigado por contribuir para a Academia 13!');
	};

	return (
		<div className='bg-gray-50 py-12'>
			<WrapperContent>
				<form
					onSubmit={handleSubmit}
					className='bg-white p-6 md:p-8 rounded-lg shadow-md space-y-8'
				>
					<h1 className='text-3xl font-bold text-purple-600'>
						Formulário de Validação - Academia 13
					</h1>
					<p className='text-gray-600'>
						Sua resposta nos ajudará a construir a melhor plataforma para o seu
						TCC!
					</p>

					<fieldset className='border border-gray-200 p-4 rounded-lg'>
						<legend className='px-2 font-bold text-lg text-purple-600'>
							1. Informações Pessoais
						</legend>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
							<div>
								<label
									htmlFor='nome'
									className='block text-sm font-medium text-gray-700'
								>
									Nome Completo*
								</label>
								<input
									type='text'
									id='nome'
									name='nome'
									required
									value={formData.nome}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
							<div>
								<label
									htmlFor='idade'
									className='block text-sm font-medium text-gray-700'
								>
									Idade*
								</label>
								<input
									type='number'
									id='idade'
									name='idade'
									required
									min='15'
									max='30'
									value={formData.idade}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									E-mail*
								</label>
								<input
									type='email'
									id='email'
									name='email'
									required
									value={formData.email}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
							<div>
								<label
									htmlFor='whatsapp'
									className='block text-sm font-medium text-gray-700'
								>
									WhatsApp*
								</label>
								<input
									type='tel'
									id='whatsapp'
									name='whatsapp'
									required
									value={formData.whatsapp}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
							<div>
								<label
									htmlFor='municipio'
									className='block text-sm font-medium text-gray-700'
								>
									Município/Província*
								</label>
								<input
									type='text'
									id='municipio'
									name='municipio'
									required
									value={formData.municipio}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						</div>

						<div className='mt-4'>
							<label
								htmlFor='genero'
								className='block text-sm font-medium text-gray-700'
							>
								Gênero (opcional)
							</label>
							<select
								id='genero'
								name='genero'
								value={formData.genero}
								onChange={handleChange}
								className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
							>
								<option value=''>Selecione...</option>
								<option value='feminino'>Feminino</option>
								<option value='masculino'>Masculino</option>
								<option value='outro'>Outro</option>
							</select>
						</div>
					</fieldset>

					<fieldset className='border border-gray-200 p-4 rounded-lg'>
						<legend className='px-2 font-bold text-lg text-purple-600'>
							2. Informações Acadêmicas
						</legend>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
							<div>
								<label
									htmlFor='instituicao'
									className='block text-sm font-medium text-gray-700'
								>
									Instituição de Ensino*
								</label>
								<input
									type='text'
									id='instituicao'
									name='instituicao'
									required
									value={formData.instituicao}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
							<div>
								<label
									htmlFor='curso'
									className='block text-sm font-medium text-gray-700'
								>
									Curso Técnico*
								</label>
								<input
									type='text'
									id='curso'
									name='curso'
									required
									value={formData.curso}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						</div>

						<div className='mt-4'>
							<label className='block text-sm font-medium text-gray-700'>
								Já escolheste o tema do TCC?*
							</label>
							<div className='mt-2 flex space-x-4'>
								{['sim', 'nao'].map((opcao) => (
									<div key={opcao} className='flex items-center'>
										<input
											type='radio'
											id={`temaEscolhido-${opcao}`}
											name='temaEscolhido'
											value={opcao}
											checked={formData.temaEscolhido === opcao}
											onChange={handleChange}
											className='h-4 w-4 text-purple-600 focus:ring-purple-500'
										/>
										<label
											htmlFor={`temaEscolhido-${opcao}`}
											className='ml-2 block text-sm text-gray-700'
										>
											{opcao === 'sim' ? 'Sim' : 'Não'}
										</label>
									</div>
								))}
							</div>
						</div>

						{formData.temaEscolhido === 'sim' && (
							<div className='mt-4'>
								<label
									htmlFor='tema'
									className='block text-sm font-medium text-gray-700'
								>
									Qual é o tema?*
								</label>
								<input
									type='text'
									id='tema'
									name='tema'
									required
									value={formData.tema}
									onChange={handleChange}
									className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						)}

						<div className='mt-4'>
							<label className='block text-sm font-medium text-gray-700'>
								Tens orientador do TCC?*
							</label>
							<div className='mt-2 flex space-x-4'>
								{['sim', 'nao'].map((opcao) => (
									<div key={opcao} className='flex items-center'>
										<input
											type='radio'
											id={`temOrientador-${opcao}`}
											name='temOrientador'
											value={opcao}
											checked={formData.temOrientador === opcao}
											onChange={handleChange}
											className='h-4 w-4 text-purple-600 focus:ring-purple-500'
										/>
										<label
											htmlFor={`temOrientador-${opcao}`}
											className='ml-2 block text-sm text-gray-700'
										>
											{opcao === 'sim' ? 'Sim' : 'Não'}
										</label>
									</div>
								))}
							</div>
						</div>
					</fieldset>

					<fieldset className='border border-gray-200 p-4 rounded-lg'>
						<legend className='px-2 font-bold text-lg text-purple-600'>
							3. Desafios e Necessidades
						</legend>

						<div className='mt-2'>
							<label className='block text-sm font-medium text-gray-700'>
								Quais dessas áreas você sente mais dificuldade?*
							</label>
							<div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
								{[
									'Escolher o tema do TCC',
									'Estrutura do TCC',
									'Desenvolvimento de software',
									'Escrita académica',
									'Planejamento e cronograma',
									'Apresentação oral',
								].map((item) => (
									<div key={item} className='flex items-center'>
										<input
											type='checkbox'
											id={`dificuldade-${item}`}
											name='dificuldades'
											value={item}
											checked={formData.dificuldades.includes(item)}
											onChange={handleCheckboxChange}
											className='h-4 w-4 text-purple-600 focus:ring-purple-500'
										/>
										<label
											htmlFor={`dificuldade-${item}`}
											className='ml-2 block text-sm text-gray-700'
										>
											{item}
										</label>
									</div>
								))}
							</div>
							<div className='mt-2'>
								<label
									htmlFor='outraDificuldade'
									className='block text-sm font-medium text-gray-700'
								>
									Outra dificuldade?
								</label>
								<input
									type='text'
									id='outraDificuldade'
									name='outraDificuldade'
									value={formData.outraDificuldade}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						</div>

						<div className='mt-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Quais tecnologias você já usou ou conhece?
							</label>
							<div className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
								{[
									'HTML, CSS',
									'JavaScript',
									'React / Next.js',
									'Node.js',
									'MySQL / MongoDB',
									'Nenhuma',
								].map((item) => (
									<div key={item} className='flex items-center'>
										<input
											type='checkbox'
											id={`tecnologia-${item}`}
											name='tecnologias'
											value={item}
											checked={formData.tecnologias.includes(item)}
											onChange={handleCheckboxChange}
											className='h-4 w-4 text-purple-600 focus:ring-purple-500'
										/>
										<label
											htmlFor={`tecnologia-${item}`}
											className='ml-2 block text-sm text-gray-700'
										>
											{item}
										</label>
									</div>
								))}
							</div>
							<div className='mt-2'>
								<label
									htmlFor='outraTecnologia'
									className='block text-sm font-medium text-gray-700'
								>
									Outra tecnologia?
								</label>
								<input
									type='text'
									id='outraTecnologia'
									name='outraTecnologia'
									value={formData.outraTecnologia}
									onChange={handleChange}
									className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
								/>
							</div>
						</div>
					</fieldset>

					<fieldset className='border border-gray-200 p-4 rounded-lg'>
						<legend className='px-2 font-bold text-lg text-purple-600'>
							4. Interesse e Comprometimento
						</legend>

						<div className='space-y-4'>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Estarias interessado em fazer cursos curtos dentro da
									plataforma?*
								</label>
								<div className='mt-2 flex space-x-4'>
									{['sim', 'nao'].map((opcao) => (
										<div key={opcao} className='flex items-center'>
											<input
												type='radio'
												id={`interesseCursos-${opcao}`}
												name='interesseCursos'
												value={opcao}
												checked={formData.interesseCursos === opcao}
												onChange={handleChange}
												className='h-4 w-4 text-purple-600 focus:ring-purple-500'
											/>
											<label
												htmlFor={`interesseCursos-${opcao}`}
												className='ml-2 block text-sm text-gray-700'
											>
												{opcao === 'sim' ? 'Sim' : 'Não'}
											</label>
										</div>
									))}
								</div>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Gostarias de receber ajuda de um mentor?*
								</label>
								<div className='mt-2 flex space-x-4'>
									{['sim', 'nao'].map((opcao) => (
										<div key={opcao} className='flex items-center'>
											<input
												type='radio'
												id={`interesseMentor-${opcao}`}
												name='interesseMentor'
												value={opcao}
												checked={formData.interesseMentor === opcao}
												onChange={handleChange}
												className='h-4 w-4 text-purple-600 focus:ring-purple-500'
											/>
											<label
												htmlFor={`interesseMentor-${opcao}`}
												className='ml-2 block text-sm text-gray-700'
											>
												{opcao === 'sim' ? 'Sim' : 'Não'}
											</label>
										</div>
									))}
								</div>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Pretendes participar de um estágio supervisionado se houver
									vaga?*
								</label>
								<div className='mt-2 flex space-x-4'>
									{['sim', 'nao'].map((opcao) => (
										<div key={opcao} className='flex items-center'>
											<input
												type='radio'
												id={`interesseEstagio-${opcao}`}
												name='interesseEstagio'
												value={opcao}
												checked={formData.interesseEstagio === opcao}
												onChange={handleChange}
												className='h-4 w-4 text-purple-600 focus:ring-purple-500'
											/>
											<label
												htmlFor={`interesseEstagio-${opcao}`}
												className='ml-2 block text-sm text-gray-700'
											>
												{opcao === 'sim' ? 'Sim' : 'Não'}
											</label>
										</div>
									))}
								</div>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Quantas horas por semana poderias dedicar ao TCC?*
								</label>
								<div className='mt-2 grid grid-cols-2 md:grid-cols-4 gap-2'>
									{['Menos de 2h', '2–4h', '5–8h', 'Mais de 8h'].map(
										(opcao) => (
											<div key={opcao} className='flex items-center'>
												<input
													type='radio'
													id={`horasDedicacao-${opcao}`}
													name='horasDedicacao'
													value={opcao}
													checked={formData.horasDedicacao === opcao}
													onChange={handleChange}
													className='h-4 w-4 text-purple-600 focus:ring-purple-500'
												/>
												<label
													htmlFor={`horasDedicacao-${opcao}`}
													className='ml-2 block text-sm text-gray-700'
												>
													{opcao}
												</label>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</fieldset>

					<fieldset className='border border-gray-200 p-4 rounded-lg'>
						<legend className='px-2 font-bold text-lg text-purple-600'>
							5. Feedback Livre
						</legend>

						<div className='mt-2'>
							<label
								htmlFor='expectativas'
								className='block text-sm font-medium text-gray-700'
							>
								O que esperas da Academia 13?
							</label>
							<textarea
								id='expectativas'
								name='expectativas'
								rows={3}
								value={formData.expectativas}
								onChange={handleChange}
								className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
							/>
						</div>

						<div className='mt-4'>
							<label
								htmlFor='sugestoes'
								className='block text-sm font-medium text-gray-700'
							>
								Tens alguma sugestão ou comentário adicional?
							</label>
							<textarea
								id='sugestoes'
								name='sugestoes'
								rows={3}
								value={formData.sugestoes}
								onChange={handleChange}
								className='outline-none mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border'
							/>
						</div>
					</fieldset>

					<div className='flex justify-end'>
						<button
							type='submit'
							className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-md transition duration-200 shadow-lg'
						>
							Enviar Formulário
						</button>
					</div>
				</form>
			</WrapperContent>
		</div>
	);
}
