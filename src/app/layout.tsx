import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import WhatsAppButton from '@/components/whatsAppButton';

export const metadata: Metadata = {
	title: 'Academia 13 - Transforme seu TCC',
	description:
		'A Academia 13 te ajuda a transformar seu TCC em um projeto de sucesso, com mentoria, cursos e uma comunidade ativa.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt'>
			<body className={`antialiased scroll-smooth`}>
				<Header />
				<main className='mt-32 md:mt-28'>{children}</main>

				<WhatsAppButton />
			</body>
		</html>
	);
}
