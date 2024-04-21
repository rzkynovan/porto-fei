import Link from 'next/link';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

export default function SendMessage() {
  return (
    <>
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
          SUBMIT
          <LiaLongArrowAltRightSolid className='text-2xl' />
        </Link>
      </div>
    </>
  );
}
