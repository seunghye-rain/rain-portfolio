import Link from 'next/link';

const COLOR_TOKENS = [
  { className: 'bg-black-1', name: 'black-1', value: '#ffffff' },
  { className: 'bg-black-2', name: 'black-2', value: '#fcfcfc' },
  { className: 'bg-black-3', name: 'black-3', value: '#f5f5f5' },
  { className: 'bg-black-4', name: 'black-4', value: '#eaeaea' },
  { className: 'bg-black-5', name: 'black-5', value: '#e3e3e3' },
  { className: 'bg-black-6', name: 'black-6', value: '#bfbfbf' },
  { className: 'bg-black-7', name: 'black-7', value: '#8c8c8c' },
  { className: 'bg-black-8 text-black-1', name: 'black-8', value: '#595959' },
  { className: 'bg-black-9 text-black-1', name: 'black-9', value: '#313131' },
  { className: 'bg-black-10 text-black-1', name: 'black-10', value: '#000000' },
  { className: 'bg-yellow-1', name: 'yellow-1', value: '#ffcd19' },
  { className: 'bg-yellow-2', name: 'yellow-2', value: '#ffda2c' },
  { className: 'bg-yellow-3', name: 'yellow-3', value: '#ffec85' },
  { className: 'bg-yellow-4', name: 'yellow-4', value: '#ffefb4' },
  { className: 'bg-yellow-5', name: 'yellow-5', value: '#fffde1' },
];

const TYPOGRAPHY_TOKENS = [
  'display-sb-42',
  'display-sb-36',
  'title-30-eb',
  'title-26-eb',
  'title-26-sb',
  'title-24-md',
  'title-23-sb',
  'title-23-eb',
  'title-23-md',
  'title-20-sb',
  'title-20-bd',
  'title-20-md',
  'font-18-bd',
  'font-18-md',
  'font-16-bd',
  'font-16-sb',
  'font-16-md',
  'font-16-rg',
  'font-14-bd',
  'caption-14-bd',
  'caption-14-md',
];

export default function Home() {
  return (
    <main className='bg-black-2 text-black-10 min-h-screen px-[8rem] py-[8rem]'>
      <div className='mx-auto flex max-w-[120rem] flex-col gap-[8rem]'>
        <section className='flex flex-col gap-[2.4rem]'>
          <div>
            <p className='font-16-md text-black-8'>Design tokens</p>
            <h1 className='title-30-eb'>양승혜 포트폴리오</h1>
          </div>
          <nav aria-label='Portfolio pages' className='flex gap-[1.6rem]'>
            <Link href='/marketing'>Marketing</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/develop'>Develop</Link>
            <Link href='/article'>Article</Link>
          </nav>
        </section>

        <section className='flex flex-col gap-[2.4rem]'>
          <h2 className='title-26-eb'>Color</h2>
          <div className='grid grid-cols-1 gap-[1.2rem] sm:grid-cols-2 lg:grid-cols-3'>
            {COLOR_TOKENS.map(({ className, name, value }) => (
              <div
                className={`border-black-5 min-h-[10rem] border p-[1.6rem] ${className}`}
                key={name}
              >
                <p className='font-16-bd'>{name}</p>
                <p className='caption-14-md'>{value}</p>
              </div>
            ))}
            <div className='gradient-bg border-black-5 min-h-[10rem] border p-[1.6rem]'>
              <p className='font-16-bd'>gradient-bg</p>
              <p className='caption-14-md'>linear-gradient(180deg, #fff 14.3%, #fffde1 110.24%)</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-[2.4rem]'>
          <h2 className='title-26-eb'>Typography</h2>
          <div className='flex flex-col gap-[2.4rem]'>
            {TYPOGRAPHY_TOKENS.map((token) => (
              <div className='border-black-5 border-b pb-[2.4rem]' key={token}>
                <p className={token}>{token}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
