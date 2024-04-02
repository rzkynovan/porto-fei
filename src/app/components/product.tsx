import classes from '../page.module.css';

import NextImage from '@/components/NextImage';

export default function Product() {
  return (
    <div className='grid grid-cols-12 place-items-center'>
      <div />
      <div
        className={`col-span-10 flex bg-white -translate-y-1/3 rounded-[20px] ${classes.card}`}
      >
        <div className='flex flex-col px-10 py-8 items-center text-center border-r border-[#DDE3E0]'>
          <NextImage src='/images/uiux.png' width={60} height={60} alt='UIUX' />
          <h4 className='text-2xl font-medium text-[#361543] mt-6'>
            UI/UX <br /> Designer
          </h4>
          <p className='text-[#361543] text-xl mt-8'>
            Research is the most important thing in understanding a requirement.
            Therefore, I can design what my design system will look like
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
            Research is the most important thing in understanding a requirement.
            Therefore, I can design what my design system will look like
          </p>
          <div className='flex flex-col gap-4 mt-8'>
            <h5 className='text-xl font-medium text-[#9747FF]'>
              Things I enjoy in here :
            </h5>
            <p className='text-xl'>Illustration, 2D & 3D Elements, Vector</p>
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
    </div>
  );
}
