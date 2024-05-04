import { FiDownload } from 'react-icons/fi';

import NextImage from '@/components/NextImage';

export default function Hero() {
  return (
    <>
      <div className='flex flex-col ml-[100px]'>
        <h1 className='text-[#69EAAC] text-8xl'>
          UI/UX & Graphic
          <br /> DESIGNER.
        </h1>
        <p className='max-w-[553px] text-xl text-white mt-3'>
          I love design, research, analyze and prototyping. Beside learn about
          visual interface things, i also keep my insight up to date for user
          experience.
        </p>
        <div className='flex gap-9 text-[#69EAAC] mt-[64px]'>
          <p className='max-w-[294px]'>
            Highly experience for UI & design system for maintain work project
            with team, or company organize.
          </p>
          <p className='max-w-[294px]'>
            Has handled many graphic design projects and still keep up to date
            for design trends.
          </p>
        </div>
        <div>
          <a
            download='CVFaisal.pdf'
            href='/file/CVFaisal.pdf'
            className='inline-flex hover:bg-white hover:text-[#9747FF] transition-colors items-center px-3 py-4 border border-white text-white text-balance gap-[10px] mt-[58px]'
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <NextImage
          src='/images/profile.png'
          width={445}
          height={445}
          alt='Profile'
          className='lg:w-[300px] xl:w-[445px]'
        />
      </div>
    </>
  );
}
