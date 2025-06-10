// components/providers/toaster-provider.tsx
'use client';

import { Toaster } from 'sonner';

export function ToasterProvider() {
	return <Toaster richColors closeButton position='top-center' />;
}
