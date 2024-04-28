import * as React from 'react';
import '@/lib/env';

import NextImage from '@/components/NextImage';

import AboutMe from '@/app/components/about-me';
import Footer from '@/app/components/footer';
import FooterStart from '@/app/components/footer-start';
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Product from '@/app/components/product';
import SendMessage from '@/app/components/send-message';
import Work from '@/app/components/work';

export default function HomePage() {
  return (
    <>
      <Header NoBackgroundColor={false} />

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

        <section className='bg-[#F9F9F9] relative'>
          <SendMessage />
        </section>

        <FooterStart />
      </main>

      <footer className=' bg-[#9747FF] z-20 grid place-items-center py-[100px]'>
        <Footer />
      </footer>
    </>
  );
}
