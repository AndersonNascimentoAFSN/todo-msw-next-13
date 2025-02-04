import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MSWProvider } from './msw-provider'

const inter = Inter({ subsets: ['latin'] })

if (typeof window === 'undefined' && process.env.NEXT_PUBLIC_MSW_MOCK === 'true') {
  const { server } = require('../mocks/node')
  server.listen()
}

// (async () => {
//   try {
//     if (
//       process.env.NEXT_RUNTIME === 'nodejs' &&
//       process.env.NEXT_PUBLIC_MSW_MOCK === 'true'
//     ) {
//       const { server } = await import('../mocks/node');
//       server.listen();
//     }
//   } catch (error) {
//     console.error('Erro ao iniciar o mock worker:', error);
//   }
// })().catch((error) => {
//   console.error('Erro inesperado na inicialização:', error);
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWProvider>
          {children}
        </MSWProvider>
      </body>
    </html>
  )
}
