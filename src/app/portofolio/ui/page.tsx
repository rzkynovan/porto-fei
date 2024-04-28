import NextImage from '@/components/NextImage';

import Footer from '@/app/components/footer';
import Header from '@/app/components/header';

export default function UIPage() {
  const banner = [
    {
      name: 'Kano-Medic',
      img: '/images/portofolio/ui/banner/kano-medic.jpg',
      width: 920,
      height: 546,
    },
    {
      name: 'Bagong-Information-System',
      img: '/images/portofolio/ui/banner/bis.jpg',
      width: 920,
      height: 546,
    },
    {
      name: 'Eduflow',
      img: '/images/portofolio/ui/banner/eduflow.jpg',
      width: 920,
      height: 546,
    },
  ];
  return (
    <>
      <Header NoBackgroundColor={true} />
      <main className=' scroll-smooth relative'>
        <section className='bg-white relative py-[100px]'>
          <div className=' w-full justify-center grid text-center mt-[100px]'>
            <span className='max-w-[553px] text-2xl font-bold'>
              /UI UX work.
            </span>
            <p className='max-w-[553px] text-xl'>
              Select the projects and review, see the details my workflow and
              how it’s work.
            </p>
          </div>
          <div className=' w-full justify-center grid grid-flow-row auto-rows-max gap-4 mt-[50px]'>
            {banner.map((e, i) => (
              <div key={i} className=' border cursor-pointer mt-8'>
                <NextImage
                  src={e.img}
                  width={e.width}
                  height={e.height}
                  alt={e.name}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className=' bg-[#9747FF] z-20 grid place-items-center py-[100px]'>
        <Footer />
      </footer>
    </>
  );
}
