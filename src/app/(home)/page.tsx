import Link from 'next/link';

import { Tabs } from '@/shared/components/ui';

export default function Home() {
  return (
    <main className='text-black-10 min-h-screen px-[8rem] py-[8rem]'>
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
            <div className='bg-black-1 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-1</div>
            <div className='bg-black-2 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-2</div>
            <div className='bg-black-3 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-3</div>
            <div className='bg-black-4 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-4</div>
            <div className='bg-black-5 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-5</div>
            <div className='bg-black-6 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-6</div>
            <div className='bg-black-7 border-black-5 min-h-[10rem] border p-[1.6rem]'>black-7</div>
            <div className='bg-black-8 border-black-5 text-black-1 min-h-[10rem] border p-[1.6rem]'>
              black-8
            </div>
            <div className='bg-black-9 border-black-5 text-black-1 min-h-[10rem] border p-[1.6rem]'>
              black-9
            </div>
            <div className='bg-black-10 border-black-5 text-black-1 min-h-[10rem] border p-[1.6rem]'>
              black-10
            </div>
            <div className='bg-yellow-1 border-black-5 min-h-[10rem] border p-[1.6rem]'>
              yellow-1
            </div>
            <div className='bg-yellow-2 border-black-5 min-h-[10rem] border p-[1.6rem]'>
              yellow-2
            </div>
            <div className='bg-yellow-3 border-black-5 min-h-[10rem] border p-[1.6rem]'>
              yellow-3
            </div>
            <div className='bg-yellow-4 border-black-5 min-h-[10rem] border p-[1.6rem]'>
              yellow-4
            </div>
            <div className='bg-yellow-5 border-black-5 min-h-[10rem] border p-[1.6rem]'>
              yellow-5
            </div>
            <div className='gradient-bg border-black-5 min-h-[10rem] border p-[1.6rem]'>
              gradient-bg
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-[2.4rem]'>
          <h2 className='title-26-eb'>Typography</h2>
          <div className='flex flex-col gap-[2.4rem]'>
            <p className='display-sb-42'>display-sb-42</p>
            <p className='display-sb-36'>display-sb-36</p>
            <p className='title-30-eb'>title-30-eb</p>
            <p className='title-26-eb'>title-26-eb</p>
            <p className='title-26-sb'>title-26-sb</p>
            <p className='title-24-md'>title-24-md</p>
            <p className='title-23-sb'>title-23-sb</p>
            <p className='title-23-eb'>title-23-eb</p>
            <p className='title-23-md'>title-23-md</p>
            <p className='title-20-sb'>title-20-sb</p>
            <p className='title-20-bd'>title-20-bd</p>
            <p className='title-20-md'>title-20-md</p>
            <p className='font-18-bd'>font-18-bd</p>
            <p className='font-18-md'>font-18-md</p>
            <p className='font-16-bd'>font-16-bd</p>
            <p className='font-16-sb'>font-16-sb</p>
            <p className='font-16-md'>font-16-md</p>
            <p className='font-16-rg'>font-16-rg</p>
            <p className='font-14-bd'>font-14-bd</p>
            <p className='caption-14-bd'>caption-14-bd</p>
            <p className='caption-14-md'>caption-14-md</p>
          </div>
        </section>

        {/* TODO: 제거하기 */}
        <section className='flex flex-col gap-[2.4rem]'>
          <h2 className='title-26-eb'>Tabs</h2>
          <Tabs>
            <Tabs.List>
              <Tabs.Item value='all' activeValue='all' href='#'>
                ALL
              </Tabs.Item>
              <Tabs.Item value='web' activeValue='all' href='#'>
                WEB
              </Tabs.Item>
              <Tabs.Item value='app' activeValue='all' href='#'>
                APP
              </Tabs.Item>
            </Tabs.List>
          </Tabs>
        </section>
      </div>
    </main>
  );
}
