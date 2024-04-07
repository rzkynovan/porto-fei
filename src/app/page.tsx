import Link from 'next/link';
import * as React from 'react';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { MdOutlineTouchApp } from 'react-icons/md';
import '@/lib/env';

import NextImage from '@/components/NextImage';

import AboutMe from '@/app/components/about-me';
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Product from '@/app/components/product';
import Work from '@/app/components/work';

export default function HomePage() {
  return (
    <>
      <Header />

      <main className=' scroll-smooth relative'>
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
            <Hero />
          </div>
        </section>

        <section className='bg-[#DAFFED] h-screen grid place-items-center'>
          <AboutMe />
        </section>

        <section>
          <Product />
        </section>

        <section className='bg-[#F9F9F9] py-[83px]'>
          <Work />
        </section>
        <section className='bg-[#F9F9F9] min-h-screen relative'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <h2 className='text-[32px] font-bold text-[#9747FF]'>
              Send me a message!
            </h2>
            <p className='text-2xl max-w-[666px]'>
              Do you want to discuss with me? or got some question? or maybe
              proposal? I’m free for you.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-x-[140px] gap-y-[54px] max-w-[1134px] mx-auto mt-[70px]'>
            <div className='col-span-1 flex flex-col'>
              <label htmlFor='name' className='text-[#361543] font-[275] ml-3'>
                Your Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Enter Your Name'
                className=' border-0 border-b bg-transparent'
              />
            </div>
            <div className='col-span-1 flex flex-col'>
              <label htmlFor='name' className='text-[#361543] font-[275] ml-3'>
                Your Email
              </label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Enter Your Email Address'
                className=' border-0 border-b bg-transparent'
              />
            </div>
            <div className='col-span-2 flex flex-col'>
              <label htmlFor='name' className='text-[#361543] font-[275] ml-3'>
                Your Message
              </label>
              <textarea
                id='name'
                name='name'
                cols={2}
                placeholder='Hi, i have project that i need your help to creating for design system for us, also we need mockup for our project
                we hope we can discuss about this matter.'
                className=' border-0 border-b bg-transparent'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <Link
              href='/'
              className='inline-flex hover:bg-[#9747FF] transition-colors hover:fill-white hover:border-white hover:text-white items-center px-10 py-4 border border-[#9747FF] text-[#9747FF] text-balance gap-[10px] mt-[48px]'
            >
              SEE MY WORK
              <LiaLongArrowAltRightSolid className='text-2xl' />
            </Link>
          </div>
        </section>
        <div className='bg-[#F9F9F9] px-[200px] '>
          <div className='bg-[#261543] py-10 px-20 translate-y-1/2 flex justify-between text-white items-center gap-5 rounded-xl'>
            <h4 className='text-2xl font-semibold'>Start a project</h4>
            <p className='text-center text-xl text-nowrap'>
              Interested for working together with me? let’s talk more maybe we{' '}
              <br />
              can connected.
            </p>
            <Link
              href='/'
              className='inline-flex hover:bg-[#9747FF] hover:fill-white hover:border-white hover:text-white items-center px-10 py-4 border border-[#69EAAC] text-white text-balance gap-[10px]'
            >
              <MdOutlineTouchApp className='text-2xl' />
              SEE MY WORK
            </Link>
          </div>
        </div>
      </main>

      <footer className=' min-h-screen bg-[#9747FF] z-20 grid place-items-center'>
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
            <Link href='/'>
              <NextImage
                src='/images/ig-white.png'
                width={63}
                height={63}
                alt='ig'
              />
            </Link>
            <Link href='/'>
              <NextImage
                src='/images/be-white.png'
                width={63}
                height={63}
                alt='ig'
              />
            </Link>
            <Link href='/'>
              <NextImage
                src='/images/ln-white.png'
                width={63}
                height={63}
                alt='ig'
              />
            </Link>
            <Link href='/'>
              <NextImage
                src='/images/email-white.png'
                width={63}
                height={63}
                alt='ig'
              />
            </Link>
            <Link href='/'>
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
      </footer>
    </>
  );
}
