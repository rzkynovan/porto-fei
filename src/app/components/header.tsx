'use client';
import Link from 'next/link';
import React from 'react';

import NextImage from '@/components/NextImage';
type params = {
  NoBackgroundColor: boolean;
};
export default function Header({ NoBackgroundColor }: params) {
  const [navOpen, setNavOpen] = React.useState(false);
  const [navOnScroll, setNavOnScroll] = React.useState(false);
  React.useCallback(() => {
    setNavOnScroll(false);
  }, []);
  return (
    <header
      className={` ${
        NoBackgroundColor ? 'bg-white' : 'bg-[#9747FF]'
      } fixed w-full top-0 z-30`}
    >
      <nav
        className={`flex w-full justify-between ${
          navOnScroll ? 'bg-white' : ''
        }`}
      >
        <div className='lg:pl-[100px] py-[24px]'>
          <Link href='/'>
            <NextImage
              src='/images/logo.png'
              width={200}
              height={44}
              alt='Logo'
            />
          </Link>
        </div>

        <div
          className={` ${
            NoBackgroundColor ? 'bg-white' : 'bg-[#69EAAC]'
          } w-1/4 flex justify-end lg:pr-[100px] py-[24px]`}
        >
          <NextImage
            src='/images/burger.png'
            width={57}
            height={57}
            alt='Logo'
            className='cursor-pointer'
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
        </div>
      </nav>
      <div
        className={`${
          navOpen ? 'block' : 'hidden'
        } sidebar flex flex-col fixed w-[382px] h-[382px] -translate-y-14 right-[100px] bg-white z-[40]`}
      >
        <NextImage
          src='/images/close.png'
          width={57}
          height={57}
          alt='close'
          className='cursor-pointer self-end mr-3 mt-3'
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
        <ul className='flex flex-col px-6 mt-6 gap-4 font-medium'>
          <li>
            <Link href='/' className='px-3 py-2 text-xl text-[#9747FF]'>
              About me
            </Link>
          </li>
          <li>
            <Link
              href='/portofolio/ui'
              className='px-3 py-2 text-xl text-[#9747FF]'
            >
              Work of UI/UX
            </Link>
          </li>
          <li>
            <Link href='/' className='px-3 py-2 text-xl text-[#9747FF]'>
              Graphic Designer
            </Link>
          </li>
          <li>
            <div className='px-3 py-2 text-xl text-[#D2AFFFED]'>
              Let’s Chat me
            </div>
            <div className='flex gap-5 items-center ml-2'>
              <Link
                href='https://www.instagram.com/feidesignn/'
                target='_blank'
              >
                <NextImage
                  src='/images/ig.png'
                  width={40}
                  height={40}
                  alt='ig'
                />
              </Link>
              <Link href='https://www.behance.net/feidesignn' target='_blank'>
                <NextImage
                  src='/images/be.png'
                  width={40}
                  height={40}
                  alt='ig'
                />
              </Link>
              <Link
                href='www.linkedin.com/in/faisal-adnan-7869a9194'
                target='_blank'
              >
                <NextImage
                  src='/images/linkedin.png'
                  width={40}
                  height={40}
                  alt='ig'
                />
              </Link>
              <Link href='mailto:faisalbrighton95@gmail.com'>
                <NextImage
                  src='/images/email.png'
                  width={40}
                  height={40}
                  alt='ig'
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
