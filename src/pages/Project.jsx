import React, { useContext } from 'react'
import ProjectCard from '../Components/Project/ProjectCard'
import { NavbarContext } from '../context/NavContext'
import gsap from 'gsap'
import FullNavBar from '../Navbar/FullNavBar'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project = () => {

  const { navbarOpen, setNavbarOpen } = useContext(NavbarContext)


  if (navbarOpen) {
    gsap.set('.section', {
      delay: 0.5,
      display: 'none',
    })
  } else {
    gsap.set('.section', {
      display: 'block'
    })
  }

  const projects = [
    {
      image1: 'src/assets/ProjetsImages/01.jpg',
      image2: 'src/assets/ProjetsImages/02.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/03.jpg',
      image2: 'src/assets/ProjetsImages/04.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/05.jpg',
      image2: 'src/assets/ProjetsImages/06.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/07.jpg',
      image2: 'src/assets/ProjetsImages/08.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/09.jpg',
      image2: 'src/assets/ProjetsImages/10.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/11.jpg',
      image2: 'src/assets/ProjetsImages/12.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/13.jpg',
      image2: 'src/assets/ProjetsImages/14.jpg'
    },
    {
      image1: 'src/assets/ProjetsImages/15.jpg',
      image2: 'src/assets/ProjetsImages/16.jpg'
    },
  ]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(".hero", {
      height: '5vh',
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: '.prnt',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
      }
    })
  })

  return (
    <div className='section '>
      <FullNavBar />
      <div className='pt-[42vh] pl-3 '>
        <h2 className='font-[font2] uppercase text-[15.6vw] relative'>projets<sup className=' text-[3.2vw] absolute top-20 '>16</sup></h2>
      </div>
      <div className='-mt-20 px-2.5 prnt  '>
        {projects.map((elem, idx) => {
          return <div key={idx} className='hero w-full h-[50vh] mb-4 flex gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Project