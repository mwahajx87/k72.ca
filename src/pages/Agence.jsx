import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavbarContext } from '../context/NavContext'
import FullNavBar from '../Navbar/FullNavBar'

import Carl_1 from '../assets/AgenceIamges/Carl_1.jpg'
import Olivier_2 from '../assets/AgenceIamges/Olivier_2.jpg'
import Lawrence_3 from '../assets/AgenceIamges/Lawrence_3.jpg'
import HugoJoseph_4 from '../assets/AgenceIamges/HugoJoseph_4.jpg'
import ChantalG_5 from '../assets/AgenceIamges/ChantalG_5.jpg'
import MyleneS_6 from '../assets/AgenceIamges/MyleneS_6.jpg'
import SophieA_7 from '../assets/AgenceIamges/SophieA_7.jpg'
import Claire_8 from '../assets/AgenceIamges/Claire_8.jpg'
import Michele_9 from '../assets/AgenceIamges/Michele_9.jpg'
import Mel_10 from '../assets/AgenceIamges/MEL_10.jpg'
import Camille_11 from '../assets/AgenceIamges/CAMILLE_11.jpg'
import Maxime_12 from '../assets/AgenceIamges/MAXIME_12.jpg'
import Meggie_13 from '../assets/AgenceIamges/MEGGIE_13.jpg'
import SophieA_14 from '../assets/AgenceIamges/SophieA_14.jpg'
import joel_15 from '../assets/AgenceIamges/joel_15.jpg'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    {src: Carl_1},
    {src: Olivier_2},
    {src: Lawrence_3},
    {src: HugoJoseph_4},
    {src: ChantalG_5},
    {src: MyleneS_6},
    {src: SophieA_7},
    {src: Claire_8},
    {src: Michele_9},
    {src: Mel_10},
    {src: Camille_11},
    {src: Maxime_12},
    {src: Meggie_13},
    {src: SophieA_14},
    {src: joel_15},
  ]


  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 38%",
        end: "top -104%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        pinReparent: true,
        scrub: 1,
        invalidateOnRefresh: true,
        pinType: "transform",
        onUpdate: (e) => {
          let imageIndex
          if (e.progress < 1) {
            imageIndex = Math.round(e.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex].src
        }
      }
    })
  })
  const { navbarOpen, setNavbarOpen } = useContext(NavbarContext)


  if (navbarOpen) {
    gsap.set('.section', {
      delay: 0.5,
      display: 'none'
    })
  } else {
    gsap.set('.section', {
      display: 'block'
    })
  }


  return (
    <>
      <div className="section py-1">
        <FullNavBar />
        <div ref={imageDivRef} className='absolute top-[38vh] left-[30.5vw]  rounded-3xl overflow-hidden w-[15vw] h-[19.5vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className=' relative font-[font2] '>
          <div className='mt-[56vh] '>
            <div><h1 className='text-[20vw] leading-[17vw] uppercase text-center' >Soixan7e <br /> Douze</h1></div>
            <div className='pl-[40%] mt-20'  >
              <p className='text-[4.5vw] w-fit leading-[4.5vw]  text-start' >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section h-screen py-15 ">
        <div className='flex  flex-col p-[10%] font-[font2] font-400 text-[1.6vw] pt-45  leading-[1.8vw]'>
          <div className='w-full flex mb-50 '>
            <div className=' w-1/3 h-fit mr-[1vw]'>
              <h2 >Expertise</h2>
            </div>
            <div className='h-fit w-1/3'>
              <ul className='flex flex-col '>
                <li>Stratégie</li>
                <li>Publicité</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Contenu</li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center items-start font-stretch-75%'>
            <div className=' pr-[2vw]  '>
              <p className='w-[25vw]'>
                Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.
              </p>
            </div>
            <div className='pr-[2vw] '>
              <p className='w-[30vw]'>
                Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.
              </p>
            </div>
            <div >
              <p className='w-[19vw]'>
                Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Agence