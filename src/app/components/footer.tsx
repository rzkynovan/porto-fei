import Link from 'next/link';

import NextImage from '@/components/NextImage';

export default function Footer() {
  return (
    <div className='flex flex-col items-center w-full'>
      <NextImage
        src='/images/logo-white.png'
        width={250}
        height={55}
        alt='Logo'
      />
      <p className='text-center text-[#F0E4FF] text-2xl font-medium mt-6'>
        Learn, Learn, & Keep Learning <br />
        till the time’s up.
      </p>
      <div className='flex gap-5 items-center ml-2 mt-[60px]'>
        <Link href='https://www.instagram.com/feidesignn/' target='_blank'>
          <NextImage
            src='/images/ig-white.png'
            width={63}
            height={63}
            alt='ig'
          />
        </Link>
        <Link href='https://www.behance.net/feidesignn' target='_blank'>
          <NextImage
            src='/images/be-white.png'
            width={63}
            height={63}
            alt='ig'
          />
        </Link>
        <Link href='www.linkedin.com/in/faisal-adnan-7869a9194' target='_blank'>
          <NextImage
            src='/images/ln-white.png'
            width={63}
            height={63}
            alt='ig'
          />
        </Link>
        <Link href='mailto:faisalbrighton95@gmail.com'>
          <NextImage
            src='/images/email-white.png'
            width={63}
            height={63}
            alt='ig'
          />
        </Link>
        <Link href='https://wa.me/6287837196362' target='_blank'>
          <NextImage
            src='/images/wa-white.png'
            width={63}
            height={63}
            alt='ig'
          />
        </Link>
      </div>
      <div className='w-[80%] h-[1px] bg-white mt-[70px]' />
      <p className='text-xl text-white mt-[35px]'>
        Handcrafted by me © feidesignn
      </p>
    </div>
  );
}
