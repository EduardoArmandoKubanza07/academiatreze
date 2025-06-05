import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
export default function WhatsAppFloatButton() {
	return (
		<div className='fixed bottom-6 right-6 z-50'>
			<Link
				href='https://wa.me/244955239648'
				target='_blank'
				rel='noopener noreferrer'
				className='
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] hover:bg-[#128c18] 
          text-white
          shadow-lg hover:shadow-xl
          transition-all duration-300
          animate-bounce
        '
				aria-label='Fale conosco no WhatsApp'
			>
				<FaWhatsapp className='w-8 h-8' />
			</Link>
		</div>
	);
}
