import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold'>양승혜 포트폴리오</h1>
      <Link href='/marketing'>Marketing</Link>
      <Link href='/resume'>Resume</Link>
      <Link href='/develop'>Develop</Link>
      <Link href='/article'>Article</Link>
    </main>
  );
}
