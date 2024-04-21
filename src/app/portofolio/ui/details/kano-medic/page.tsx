'use client';
import { DotIcon } from 'lucide-react';
import React from 'react';

import classes from '../ui.module.css';

import NextImage from '@/components/NextImage';

import Footer from '@/app/components/footer';
import Header from '@/app/components/header';

export default function KanoMedicPage() {
  const [tab, setTab] = React.useState(0);
  const workflow = [
    {
      img: '/images/portofolio/ui/general/icon/discover.png',
      title: 'Discovery',
      description: [
        'Requirement Understanding',
        'Defining Use Case',
        'Ideation',
      ],
    },
    {
      img: '/images/portofolio/ui/general/icon/web-search.png',
      title: 'Analysis & Research',
      description: [
        'Research more deeply about user needs and the menu that want to display. conduct interviews with stakeholders / users, create use cases and user personas and user flow if needed.',
      ],
    },
    {
      img: '/images/portofolio/ui/general/icon/bezier.png',
      title: 'Design & Prototyping',
      description: [
        'Create a system design and immediately create a high fidelity design for a mockup of the wireframe that has been obtained from the BA team. Create a prototype of the design mockup that has been made.',
      ],
    },
    {
      img: '/images/portofolio/ui/general/icon/device-message.png',
      title: 'Development & Testing',
      description: [
        "Provide documentation so that the team can easily read and see the design that has been made and immediately given to the development team if it is in accordance with the PM's approval.",
      ],
    },
  ];
  const ProblemList = [
    'Hospital and patient data is not easy to read.',
    'Lack of integration between departments and systems in the hospital',
    'Difficulty in scheduling doctor appointments, surgeries, and tests.',
    'Inefficient drug inventory management, leading to drug shortages or wastage.',
  ];
  const SolutionList = [
    'Make the interface more user-friendly for all users.',
    'System integration for also centralized electronic medical records.',
    'Provision of a platform for coordinated scheduling.',
    'Implementation of an automated drug inventory management system.',
    'Integration of payment system and hospital administration.',
  ];

  const UserPersona = {
    frontName: 'Siti',
    lastName: 'Rahmawati',
    age: 38,
    education: 'Bachelor of Nursing',
    status: 'Married',
    occupation: 'Sales Manager',
    location: 'Indonesia',
    techLiterate: 'High',
    content:
      'Quick and easy access to patient information really helps me provide better and more targeted care to them.',
    personality: ['Extrovert', 'Reader', 'Tech-savy'],
    bio: 'Siti is an experienced nursing professional with more than 15 years working in the healthcare field. She has worked her way up from a field nurse to eventually serving as the Head Nurse in a government hospital serving many patients with various disease cases.',
    coreNeeds: [
      'Siti needed an information system that was easy to use, intuitive and fast.',
      'She wanted a system that could provide patient information quickly and accurately, so she could better plan care.',
      "The system needed to be accessible from a variety of devices, including desktop computers at the nurse's workstation, as well as mobile devices when she was moving around the care unit.",
    ],
  };

  const TaskAssign = [
    'Landing Page',
    'Poly and ER Services',
    'Login Page',
    'Laboratory Check',
    'Patient Page',
    'Master Data Pharmacy',
  ];

  return (
    <>
      <Header NoBackgroundColor={true} />

      <main className=' scroll-smooth relative'>
        <section className='bg-white relative pt-[100px]'>
          <div className=' w-full place-items-center grid grid-flow-row auto-rows-max gap-4 mt-[50px]'>
            <div className=' border'>
              <NextImage
                src='/images/portofolio/ui/kano-medic/hero.jpg'
                width={1132}
                height={611}
                alt='hero'
              />
            </div>

            <div className=' w-[1200px] '>
              <div className=' w-full justify-center mt-[100px] flex'>
                <p className={` ${classes.workflowTitle} text-[#361543] mr-2`}>
                  Work
                </p>
                <p className={` ${classes.workflowTitle} text-[#9747FF]`}>
                  Flow
                </p>
              </div>

              <div className=' grid grid-cols-4 gap-4 mt-[50px]'>
                {workflow.map((e, i) => (
                  <div key={i} className={classes.workflowContainer}>
                    <NextImage
                      src={e.img}
                      width={40}
                      height={40}
                      alt={e.title}
                    />
                    <p className={` ${classes.workflowCardTitle} mt-2`}>
                      {e.title}
                    </p>
                    <div
                      className={` ${classes.workflowCardDescription} mt-2 block`}
                    >
                      {e.description.length > 1 ? (
                        <>
                          {e.description.map((desc, idx) => (
                            <p key={idx}>{desc}</p>
                          ))}
                        </>
                      ) : (
                        <p>{e.description[0]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className=' w-full'>
              <div className=' grid grid-cols-3 gap-4 w-[1200px] mx-auto my-[100px] place-items-center'>
                <div
                  className={tab == 0 ? classes.tabTextActive : classes.tabText}
                  onClick={() => setTab(0)}
                >
                  Research
                  {tab == 0 && (
                    <div className={` ${classes.tabUnderlineActive} mx-auto`} />
                  )}
                </div>
                <div
                  className={tab == 1 ? classes.tabTextActive : classes.tabText}
                  onClick={() => setTab(1)}
                >
                  Design
                  {tab == 1 && (
                    <div className={` ${classes.tabUnderlineActive} mx-auto`} />
                  )}
                </div>
                <div
                  className={tab == 2 ? classes.tabTextActive : classes.tabText}
                  onClick={() => setTab(2)}
                >
                  Testing
                  {tab == 2 && (
                    <div className={` ${classes.tabUnderlineActive} mx-auto`} />
                  )}
                </div>
              </div>

              {tab == 0 ? (
                <>
                  <div className='grid grid-cols-2 gap-4 w-[1200px] mx-auto'>
                    <div className={` ${classes.reseachAboutProjectTitle}`}>
                      <div className='flex'>
                        <p className=' text-[#9747FF] mr-3'>About</p>
                        <p className=' text-[#361543]'>Project</p>
                      </div>

                      <p
                        className={` mt-10 ${classes.reseachAboutProjectDesc}`}
                      >
                        Kano Medic is one of the products created by our
                        company, Kano Teknologi Utama Inc. This product is a
                        hospital management system that can be used also for
                        clinics or for medical, it contains several modules
                        commonly used for hospital management such as patient
                        data, laboratory records, pharmacy, etc.
                      </p>
                    </div>
                    <div className=''>
                      <NextImage
                        src='/images/portofolio/ui/kano-medic/about-project.png'
                        width={443}
                        height={306}
                        alt='hero'
                        className='float-end'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-3 gap-4 my-[100px] w-[1200px] mx-auto'>
                    <div className={classes.reseachProblemContainer}>
                      <div className='text-center'>
                        <span className={classes.reseachProblemTitle}>
                          Problem
                        </span>
                      </div>
                      <div>
                        {ProblemList.map((e, i) => (
                          <div key={i} className='grid grid-cols-6 gap-6'>
                            <DotIcon />
                            <span
                              className={` col-span-5 ${classes.reseachProblemDesc}`}
                            >
                              {e}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='justify-center flex'>
                      <NextImage
                        src='/images/portofolio/ui/general/aocnfuse.png'
                        width={326}
                        height={217}
                        alt='aocnfuse'
                        className='my-auto'
                      />
                    </div>
                    <div className={classes.reseachSolutionContainer}>
                      <div className='text-center'>
                        <span className={classes.reseachSolutionTitle}>
                          Solution
                        </span>
                      </div>
                      <div>
                        {SolutionList.map((e, i) => (
                          <div key={i} className='grid grid-cols-6 gap-6'>
                            <DotIcon />
                            <span
                              className={` col-span-5 ${classes.reseachProblemDesc}`}
                            >
                              {e}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className=' w-full bg-[#F9F9F9] py-[100px]'>
                    <div className='grid grid-cols-3 gap-4 w-[1200px] mx-auto'>
                      <div className='justify-center flex'>
                        <NextImage
                          src='/images/portofolio/ui/general/text/User Persona.png'
                          width={262}
                          height={130}
                          alt='User Persona'
                          className='my-auto'
                        />
                      </div>
                      <div
                        className={`${classes.researchUserPersonaContainer} col-span-2`}
                      >
                        <div className='grid grid-cols-2 gap-7'>
                          <div
                            className={`col-span-2 ${classes.researchUserPersonaContainerCard}`}
                          >
                            <div className='grid grid-cols-2 gap-3'>
                              <div className='grid grid-row place-items-center'>
                                <NextImage
                                  src='/images/portofolio/ui/general/avatar/siti.png'
                                  width={100}
                                  height={100}
                                  alt='Siti'
                                  className=''
                                />
                                <div className='flex'>
                                  <p
                                    className={` mr-3 text-[#361543] ${classes.researchUserPersonaName}`}
                                  >
                                    {UserPersona.frontName}
                                  </p>
                                  <p
                                    className={` text-[#9747FF] ${classes.researchUserPersonaName}`}
                                  >
                                    {UserPersona.lastName}
                                  </p>
                                </div>
                              </div>
                              <div className='grid grid-cols-2'>
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  AGE
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.age}
                                </div>
                                {/*  */}
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  EDUCATION
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.education}
                                </div>
                                {/*  */}
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  STATUS
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.status}
                                </div>
                                {/*  */}
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  OCCUPATION
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.occupation}
                                </div>
                                {/*  */}
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  LOCATION
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.location}
                                </div>
                                {/*  */}
                                <div
                                  className={
                                    classes.researchUserPersonaDetailsGrey
                                  }
                                >
                                  TECH LITERATE
                                </div>
                                <div
                                  className={classes.researchUserPersonaDetails}
                                >
                                  {UserPersona.techLiterate}
                                </div>
                                {/*  */}
                              </div>
                            </div>
                          </div>
                          <div
                            className={` ${classes.researchUserPersonaContainerCard}`}
                          >
                            <div>
                              <NextImage
                                src='/images/portofolio/ui/general/icon/Content.png'
                                width={20}
                                height={20}
                                alt='content'
                              />
                            </div>
                            <div className='mt-2'>{UserPersona.content}</div>
                          </div>
                          <div
                            className={` ${classes.researchUserPersonaContainerCard}`}
                          >
                            <p className={classes.researchUserPersonality}>
                              Personality
                            </p>
                            <div className='w-full grid grid-cols-2 gap-4 gap-x-0 h-auto mt-5'>
                              {UserPersona.personality.map((e, i) => (
                                <div key={i} className={classes.chip}>
                                  {e}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div
                            className={` ${classes.researchUserPersonaContainerCard}`}
                          >
                            <p className={classes.researchUserPersonality}>
                              Bio
                            </p>
                            <p className=''>{UserPersona.bio}</p>
                          </div>
                          <div
                            className={` ${classes.researchUserPersonaContainerCard}`}
                          >
                            <p className={classes.researchUserPersonality}>
                              Bio
                            </p>
                            {UserPersona.coreNeeds.map((e, i) => (
                              <div key={i} className='grid grid-cols-10'>
                                <DotIcon />
                                <p className='col-span-9'>{e}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' w-full bg-[#9747FF] py-[100px] flex justify-center border-b'>
                    <NextImage
                      src='/images/portofolio/ui/kano-medic/mind-mapping.png'
                      width={998}
                      height={620}
                      alt='mind-mapping'
                    />
                  </div>
                </>
              ) : tab == 1 ? (
                <>
                  <div className=' w-full flex justify-center border-b'>
                    <NextImage
                      src='/images/portofolio/ui/kano-medic/showcase.png'
                      width={1280}
                      height={1030}
                      alt='showcase'
                    />
                  </div>
                  <div className=' w-full h-[5300px] pb-[100px] flex justify-center relative'>
                    <div className=' w-full h-[775px] bg-[#9747FF]'></div>
                    <div className='mt-[100px] absolute'>
                      <div className='grid text-center max-w-[500px] mx-auto '>
                        <span className={` ${classes.loginScreenTitle}`}>
                          Login Screen
                        </span>
                        <span className={` ${classes.loginScreenDesc}`}>
                          On this login page you only need to enter the login id
                          and password that has been created by the admin. Here
                          you cannot register because this is an internal
                          application for employees who use the application.
                        </span>
                      </div>
                      <NextImage
                        src='/images/portofolio/ui/kano-medic/login-screen.png'
                        width={1036}
                        height={1934}
                        alt='login-screen'
                        className='mt-[50px]'
                      />
                      <NextImage
                        src='/images/portofolio/ui/kano-medic/list-all.png'
                        width={1036}
                        height={2692}
                        alt='list-all'
                        className='mt-[100px]'
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className=' w-full bg-white pb-[100px] px-[250px]'>
                    <div className='flex'>
                      <p
                        className={` mr-2 text-[#9747FF] ${classes.testingTitle}`}
                      >
                        Usability
                      </p>
                      <p className={` text-[#361543] ${classes.testingTitle}`}>
                        Testing
                      </p>
                    </div>
                    <p className={` ${classes.testingDesc}`}>
                      This product is not at the final stage but my team and I
                      tested every single module and menu and so far is good and
                      some of it has been made by the developer team.
                    </p>

                    <div className='flex mt-[100px]'>
                      <p
                        className={` mr-2 text-[#9747FF] ${classes.testingTitle}`}
                      >
                        Task
                      </p>
                      <p className={` text-[#361543] ${classes.testingTitle}`}>
                        Assigned
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      {TaskAssign.map((e, i) => (
                        <div key={i} className='grid grid-cols-10 gap-6'>
                          <div className='bg-[#9747FF] rounded-full border w-[16px] h-[16px] my-auto' />
                          <span
                            className={` col-span-9 ${classes.testingDesc}`}
                          >
                            {e}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className='flex mt-[100px]'>
                      <p className={` text-[#361543] ${classes.testingTitle}`}>
                        Feedbacks
                      </p>
                    </div>
                    <p className={` ${classes.testingDesc}`}>
                      In this case I get a pretty good feed from the product
                      manager that my design is getting better to complete the
                      assigned task.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className=' w-full flex justify-center py-[100px]'>
              <NextImage
                src='/images/portofolio/ui/general/text/Thank You.png'
                width={205}
                height={120}
                alt='Thank You'
              />
            </div>
          </div>
        </section>
      </main>

      <footer className=' bg-[#9747FF] z-20 grid place-items-center py-[100px]'>
        <Footer />
      </footer>
    </>
  );
}
