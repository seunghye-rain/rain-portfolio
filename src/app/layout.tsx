import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/shared/components/ui';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '양승혜 포트폴리오',
  description: 'Rain Portfolio',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  } as Viewport,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={pretendard.className}>
      <body>
        <Header />
        <main className='px-[8rem] py-[8rem]'>{children}</main>
      </body>
    </html>
  );
}
