import Link from 'next/link';
import { MdOutlineTouchApp } from 'react-icons/md';

export default function FooterStart() {
  return (
    <div className='bg-[#F9F9F9] px-[100px] '>
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
          Lets Do This
        </Link>
      </div>
    </div>
  );
}
