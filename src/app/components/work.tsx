import Link from 'next/link';

import NextImage from '@/components/NextImage';

export default function Work() {
  return (
    <>
      <div className='flex flex-col gap-6 text-[#3F1E6B] items-center'>
        <h3 className='text-[32px]'>My Recent Work</h3>
        <p className='text-xl'>Here are a few projects i’ve been worked on.</p>
      </div>
      <div className='grid grid-cols-12 place-items-center mt-[24px]'>
        <div />
        <div className='col-span-10 flex bg-white rounded-[20px] p-5'>
          <div className='flex flex-col px-[100px] py-8 border-r border-[#DDE3E0]'>
            <h4 className='text-2xl font-medium text-[#C090FF] mt-6'>
              UI/UX Design <br /> Porfolio’s
            </h4>
            <p className='text-[#361543] text-xl mt-8'>
              You can see the project design case, the details and flow how i
              work.
            </p>
            <div>
              <Link
                href='/'
                className='inline-flex items-center px-10 py-4 border border-[#9747FF] text-[#9747FF] text-balance gap-[10px] mt-[48px]'
              >
                SEE MY WORK
                <NextImage
                  src='/images/arrow-right.png'
                  width={76}
                  height={2}
                  alt='arrow-right'
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-col px-[100px] py-8'>
            <h4 className='text-2xl font-medium text-[#C090FF] mt-6'>
              Graphic Design <br /> Portfolio’s
            </h4>
            <p className='text-[#361543] text-xl mt-8'>
              All the design project about graphic design was here too, feel
              free for review.
            </p>
            <div>
              <Link
                href='/'
                className='inline-flex items-center px-10 py-4 border border-[#9747FF] text-[#9747FF] text-balance gap-[10px] mt-[48px]'
              >
                SEE MY WORK
                <NextImage
                  src='/images/arrow-right.png'
                  width={76}
                  height={2}
                  alt='arrow-right'
                />
              </Link>
            </div>
          </div>
        </div>
        <div />
      </div>
    </>
  );
}