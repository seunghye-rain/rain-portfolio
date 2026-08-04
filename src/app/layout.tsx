import '@/styles/globals.css';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
