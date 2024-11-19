'use client'

import { useState , useRef , useEffect} from 'react'
import Image from 'next/image'
import { Button } from "./components/ui/button"
import  Link  from "next/link"
import "boxicons/css/boxicons.min.css"

import { ContainerScroll } from './components/ui/container-scroll-animation'
import { Home, Info, Calendar, Users, Code ,ChevronDown} from 'lucide-react'
import { Montserrat } from 'next/font/google'
import { Carousel, Card } from "./components/ui/apple-cards-carousel"
import { Timeline } from "./components/ui/timeline"
import { Tabs } from "../app/components/ui/tabs"
import { useRouter } from "next/router"


import APC from "../app/images/APC.png";
import MoodBoard from "../app/images/MoodBoard.jpg";
import NJACK from "../app/images/NJACK.png";
import Sparkonics from "../app/images/Sparkonics.png";
import { AnimatedTestimonials } from './components/ui/animated-testimonials'
import Navbar from './components/Navbar'

import "./scroll-smooth.css"

const montserrat = Montserrat({ subsets: ['latin'] })
const clubsList = [
  "Robotics Club", "Coding Club", "Electronics Club", "3D Printing Club",
  "Aeromodelling Club", "Astronomy Club", "Automobile Club", "Biotech Club",
  "Chemical Club", "Civil Club", "Design Club", "Energy Club",
  "Finance Club", "Gaming Club", "Literary Club", "Mathematics Club",
  "Music Club", "Photography Club", "Quizzing Club", "Sports Club"
]

function AboutCard({ icon, head, body }: { icon: string, head: string, body: string }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        <div className="flex items-center">
          <i className={`bx ${icon} text-3xl`}></i>
          {head}
        </div>
      </button>
      { show && <p>{body}</p> }
      <hr />
    </div>
  )
}

function Footer() {
  return (
    <div className="flex items-center px-20">
      <div className="basis-0 grow">
            <Image
              src="https://stc.iitp.ac.in/assets/img/logo-text.png"
              alt="STC Logo"
              width={500}
              height={500}
            />
        <p>The council of Student's Gymkhana to nurture the advancement of technical culture of Indian Institute of Technology, Patna</p>
      </div>
      <div className="flex flex-col basis-0 grow">
        <h1>QUICK LINKS</h1>
        <p>NJACK</p>
        <p>Sparkonics</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721" allowFullScreen className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]" style={{ border: 0 }}></iframe>
    </div>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')
  const [isClubsOpen, setIsClubsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsClubsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const data_ = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            8th position among all IITs in the meet.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech12.0/IMG20231222191123.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/IMG20231222183140.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/1000050242-01.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech12.0/20231221_112957.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          7th position among all IITs in the meet.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech11.0/11.0result.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/DSC_5542.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/DSC_5497.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech11.0/IMG20230210182003.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            9th position among all IITs in the meet.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/interiittech10.0/279008917_5692980604063021_4883747500802782310_n.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 023048.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 022944.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/interiittech10.0/Screenshot 2024-11-18 023133.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      title: "2024-25",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2024-25 Team</p>
          <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p>
            <AnimatedTestimonials testimonials={testimonials1}/>
            </p>
            
          </div>
        );
      })}
    </>
        </div>
      ),
    },
    {
      title: "2023-24",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2023-24 Team</p>
          <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p>
            <AnimatedTestimonials testimonials={testimonials2}/>
            </p>
            
          </div>
        );
      })}
    </>
        </div>
      ),
    },
    {
      title: "2022-23",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2022-23 Team</p>
          <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p>
            <AnimatedTestimonials testimonials={testimonials3}/>
            </p>
            
          </div>
        );
      })}
    </>
        </div>
      ),
    },
    {
      title: "2021-22",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>2021-22 Team</p>
          <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p>
            <AnimatedTestimonials testimonials={testimonials4}/>
            </p>
            
          </div>
        );
      })}
    </>
        </div>
      ),
    },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <div className={`min-h-screen flex flex-col ${montserrat.className}`}>
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />

            <div className="flex flex-col overflow-hidden">
              <ContainerScroll
                titleComponent={
                  <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                      IIT PATNA <br />
                      <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                        Students Technical Council
                      </span>
                    </h1>
                  </>
                }
              >
                <Image
                  src={`/images/hero2.png`}
                  alt="hero"
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-cover h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
            </div>

          </div>
        </main>
      </div>

      <div className="w-full pt-200vh lg:pt-[50vh]" id="#timeline">
        <Timeline data={data_}/>
      </div>

      <div className="w-full h-full py-20" id="#events">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          STC Events
        </h2>
        <Carousel items={cards} />
      </div>



      <div className="h-[70rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20" id="#team">
        <Tabs tabs={tabs} />
      </div>

      <div className="items-center justify-center text-center space-y-4 sm:space-y-0 sm:space-x-6 pt-32 pb-4">
        <Button variant="default" size="lg">Learn More</Button>
        <Button variant="outline" size="lg">Contact Us</Button>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center px-20" id="about">
        <h1 className="text-6xl tracking-widest py-8">ABOUT <span className="text-blue-500">US</span></h1>
        <p className="text-gray-600">STC aims to unify various technical clubs, research activities, competitions, and interdisciplinary projects, providing a platform for students to turn their innovative ideas into reality. By coordinating all technical clubs under one umbrella, STC will create a collaborative environment for budding engineers. Its mission is to enhance the technical skills and knowledge of students, fostering innovation and technological advancements through three core concepts</p>
        <div className="w-full flex items-center gap-8">
            <Image
              src="/images/admin_sideview.jfif"
              alt="Admin Sideview"
              width={602}
              height={421}
              className="basis-0 grow rounded-2xl"
            />
            <div className="basis-0 grow">
              <AboutCard
                icon="bxs-group"
                head="Learning and growing together"
                body="STC intends to create a forum by bringing the whole students community together where students can learn, share and grow together pioneering new ideas and inventions."
              />
              <AboutCard
                icon="bx-medal"
                head="Intra college technical competition and other activities"
                body="Organising various competitions, activities and events to nurture the growth of embryonic engineers and providing them exposure to various technical areas and competitions."
              />
              <AboutCard
                icon="bx-home-circle"
                head="Organisation of the technical clubs"
                body="STC objectives include streamlining all the existing technical clubs as well as facilitating the establishment of the new clubs."
              />
            </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}


const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="inline-block font-bold text-neutral-700 dark:text-neutral-200">
                Yaha pe team info we will have...
              </span>{" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat soluta, obcaecati dignissimos itaque animi nesciunt modi id, minima earum beatae vel, rem natus culpa.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Astronomy and Particle Physics Club",
    title: "National Space Day-2024",
    src: "/images/APC.png",
    content: <ul><li>Quiz</li>
    <li>22-23/08/24</li>
    <li>No Time</li>
    <li>live streaming, poster, quiz, movie night</li>
    <li>5:30pm-8:30pm</li></ul>,
  },
  {
    category: "NJACK",
    title: "NSoC Game Jam",
    src: "/images/NJACK.png",
    content: "",
  },
  {
    category: "NJACK",
    title: "NSoC Animation Challenge",
    src: "/images/NJACK.png",
    content:  "",
  },

  {
    category: "Sparkonics",
    title: "Electrivia - v1.0",
    src: "/images/Sparkonics.png",
    content: "",
  },
  {
    category: "NJACK",
    title: "NSoC Design Challenge",
    src: "/images/NJACK.png",
    content: "",
  },
  {
    category: "Moodboard",
    title: "Inter IIT Orientation",
    src: "/images/MoodBoard.png",
    content: "",
  },
];

const testimonials1 = [
  {
    quote:
      "",
    name: "Dr. Somanath Pradhan",
    designation: "PIC Technical Affairs",
    src: "/images/team2024-25/drsomnath.png",
  },
  {
    quote:
      "",
    name: "Kirtan Jain",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2024-25/KirtanJain.png",
  },
  {
    quote:
      "",
    name: "Rishu Kumar Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2024-25/RishuSingh.png"
  },
  {
    quote:
      "",
    name: "Hemant Chaurasia",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2024-25/HemantChaurasia.png",
  },
  {
    quote:
      "",
    name: "Harshit Dhankhar",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2024-25/Harshit.png",
  },
  {
    quote:
      "",
    name: "Pranjal Chamaria",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2024-25/Pranjal.png",
  },
];

const testimonials2 = [
  {
    quote:
      "",
    name: "Dr. Bachu Anilkumar",
    designation: "PIC Technical Affairs",
    src: "/images/team2023-24/Bachu_Anilkumar1.jpg",
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2023-24/rishikesh.jpg",
  },
  {
    quote:
      "",
    name: "Akhand Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2023-24/Akhand.png"
  },
  {
    quote:
      "",
    name: "Aryan Sahoo",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2023-24/Aryan.png",
  },
  
  {
    quote:
      "",
    name: "Pragya Harsh",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2023-24/pragya.jpeg",
  },
];

const testimonials3 = [
  {
    quote:
      "",
    name: "Dr. Anoop Kumar Gupta",
    designation: "PIC Technical Affairs",
    src: "/images/team2022-23/AKGupta.jpg",
  },
  {
    quote:
      "",
    name: "Shivam Sahu",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2022-23/Shivam.jpg",
  },
  {
    quote:
      "",
    name: "Harsh Singh",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2022-23/HarshSingh.png"
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2022-23/rishikesh.jpg",
  },
  {
    quote:
      "",
    name: "Omkar Deshpande",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2022-23/Omkar.jpg",
  },
  
  {
    quote:
      "",
    name: "Anushka Pandey",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2022-23/AnushkaPandey.jpg",
  },
];

const testimonials4 = [
  {
    quote:
      "",
    name: "Dr. Sujoy Kumar Samanta",
    designation: "PIC Technical Affairs",
    src: "/images/team2021-22/dr.sujoy.jpg",
  },
  {
    quote:
      "",
    name: "Satyam Shukla",
    designation: "General Secretary, Technical Affairs",
    src: "/images/team2021-22/satyam.jpg",
  },
  {
    quote:
      "",
    name: "Rishikesh Devanathan",
    designation: "Technical Secretary, Sophomore Year",
    src: "/images/team2021-22/rishikesh.jpg"
  },
  {
    quote:
      "",
    name: "Shubham Kumar",
    designation: "Technical Secretary, Junior Year",
    src: "/images/team2021-22/shubham.jpg",
  },
  {
    quote:
      "",
    name: "Anuj Kumar Yadav",
    designation: "Technical Secretary, Senior Year",
    src: "/images/team2021-22/anuj.jpg",
  },
  
  {
    quote:
      "",
    name: "Kalpana Bishnoi",
    designation: "Technical Secretary, UG Girls",
    src: "/images/team2021-22/kalpana.jpg",
  },
];
/* vi: set et sw=2: */
