'use client';

import Link from 'next/link';
import * as React from 'react';
import { FiDownload } from 'react-icons/fi';
import '@/lib/env';

import classes from './page.module.css';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import NextImage from '@/components/NextImage';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [navOnScroll, setNavOnScroll] = React.useState(false);

  return (
    <>
      <header className={`fixed w-full top-[68px] lg:px-[100px] z-30 `}>
        <nav
          className={`flex w-full justify-between ${
            navOnScroll ? 'bg-white' : ''
          }`}
        >
          <NextImage
            src='/images/logo.png'
            width={200}
            height={44}
            alt='Logo'
          />
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
              <Link href='/' className='px-3 py-2 text-xl text-[#9747FF]'>
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
                <Link href='/'>
                  <NextImage
                    src='/images/ig.png'
                    width={40}
                    height={40}
                    alt='ig'
                  />
                </Link>
                <Link href='/'>
                  <NextImage
                    src='/images/be.png'
                    width={40}
                    height={40}
                    alt='ig'
                  />
                </Link>
                <Link href='/'>
                  <NextImage
                    src='/images/linkedin.png'
                    width={40}
                    height={40}
                    alt='ig'
                  />
                </Link>
                <Link href='/'>
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
      <main
        className=' scroll-smooth relative'
        onScrollCapture={() => {
          setNavOnScroll(!navOnScroll);
        }}
      >
        <section className='bg-[#9747FF] h-screen relative'>
          <div className='absolute right-0 w-1/4 bg-[#69EAAC] h-screen' />
          <NextImage
            src='/images/pesawat.png'
            width={492}
            height={139}
            alt='pesawat'
            className='absolute right-1/3 top-1/3 translate-y-1/3'
          />
          <NextImage
            src='/images/accent-1.png'
            width={116}
            height={145}
            alt='pesawat'
            className='absolute right-1/3 top-1/4'
          />
          <NextImage
            src='/images/accent-2.png'
            width={78}
            height={110}
            alt='pesawat'
            className='absolute right-[3%] bottom-[4%]'
          />
          <NextImage
            src='/images/accent-3.png'
            width={20}
            height={176}
            alt='pesawat'
            className='absolute left-[3%] bottom-[15%]'
          />
          <div className='grid grid-cols-2 h-full w-full place-items-center relative'>
            <div className='flex flex-col ml-[100px]'>
              <h1 className='text-[#69EAAC] text-8xl'>
                UI/UX & Graphic
                <br /> DESIGNER.
              </h1>
              <p className='max-w-[553px] text-xl text-white mt-3'>
                I love design, research, analyze and prototyping. Beside learn
                about visual interface things, i also keep my insight up to date
                for user experience.
              </p>
              <div className='flex gap-9 text-[#69EAAC] mt-[64px]'>
                <p className='max-w-[294px]'>
                  Highly experience for UI & design system for maintain work
                  project with team, or company organize.
                </p>
                <p className='max-w-[294px]'>
                  Has handled many graphic design projects and still keep up to
                  date for design trends.
                </p>
              </div>
              <div>
                <Link
                  href='/'
                  download='/'
                  className='inline-flex items-center px-3 py-4 border border-white text-white text-balance gap-[10px] mt-[58px]'
                >
                  <FiDownload />
                  Download Resume
                </Link>
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
          </div>
        </section>
        <section className='bg-[#DAFFED] h-screen grid place-items-center'>
          <div className='flex flex-col max-w-[927px] items-center text-center gap-6 text-[#3F1E6B]'>
            <h5 className='font-bold text-3xl'>
              Hi, i’m Faisal but you can call me Fei, Nice to meet you.
            </h5>
            <p className='text-2xl'>
              My journey began to become a graphic designer when i was in high
              school. Then i studied informatics in college and finally i wanted
              to combine design thinking and programming thinking. That's where
              i got my interest and passion for becoming a UI/UX designer also
              keep to be graphic designer.
            </p>
          </div>
        </section>
        <section className='grid grid-cols-12 place-items-center'>
          <div />
          <div
            className={`col-span-10 flex bg-white -translate-y-1/3 rounded-[20px] ${classes.card}`}
          >
            <div className='flex flex-col px-10 py-8 items-center text-center'>
              <NextImage
                src='/images/uiux.png'
                width={60}
                height={60}
                alt='UIUX'
              />
              <h4 className='text-2xl font-medium text-[#361543] mt-6'>
                UI/UX <br /> Designer
              </h4>
              <p className='text-[#361543] text-xl mt-8'>
                Research is the most important thing in understanding a
                requirement. Therefore, I can design what my design system will
                look like
              </p>
              <div className='flex flex-col gap-4 mt-8'>
                <h5 className='text-xl font-medium text-[#9747FF]'>
                  Things I enjoy in here :
                </h5>
                <p className='text-xl'>
                  UX, Analyst, Braindstorming, Mindmapping, Prototyping
                </p>
              </div>
              <div className='flex flex-col gap-4 mt-8'>
                <h5 className='text-xl font-semibold text-[#9747FF]'>
                  Design Tools :
                </h5>
                <ul className='flex flex-col gap-3 text-xl'>
                  <li>
                    <p>Figma & Plugins</p>
                  </li>
                  <li>
                    <p>Whymsical</p>
                  </li>
                  <li>
                    <p>Photoshop</p>
                  </li>
                  <li>
                    <p>Illustrator</p>
                  </li>
                  <li>
                    <p>Notion</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col px-10 py-8 items-center text-center'>
              <NextImage
                src='/images/graphic.png'
                width={60}
                height={60}
                alt='UIUX'
              />
              <h4 className='text-2xl font-medium text-[#361543] mt-6'>
                Graphic <br /> Designer
              </h4>
              <p className='text-[#361543] text-xl mt-8'>
                Research is the most important thing in understanding a
                requirement. Therefore, I can design what my design system will
                look like
              </p>
              <div className='flex flex-col gap-4 mt-8'>
                <h5 className='text-xl font-medium text-[#9747FF]'>
                  Things I enjoy in here :
                </h5>
                <p className='text-xl'>
                  Illustration, 2D & 3D Elements, Vector
                </p>
              </div>
              <div className='flex flex-col gap-4 mt-8'>
                <h5 className='text-xl font-semibold text-[#9747FF]'>
                  Design Tools :
                </h5>
                <ul className='flex flex-col gap-3 text-xl'>
                  <li>
                    <p>Canva</p>
                  </li>
                  <li>
                    <p>Photoshop</p>
                  </li>
                  <li>
                    <p>Illustrator</p>
                  </li>
                  <li>
                    <p>CorelDraw</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div />
        </section>
        <section className='bg-[#F9F9F9]'>
          <div className='flex flex-col gap-6 text-[#3F1E6B]'>
            <h3 className='text-[32px]'>My Recent Work</h3>
            <p className='text-xl'>
              Here are a few projects i’ve been worked on.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
