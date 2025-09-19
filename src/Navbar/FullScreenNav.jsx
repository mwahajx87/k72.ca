import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const FullScreenNav = () => {
    const NavRef = useRef(null)
    const NavRef1 = useRef(null)
    const NavRef2 = useRef(null)
    const NavRef3 = useRef(null)
    const FullScreenNav = useRef(null)

    const { navbarOpen, setNavbarOpen } = useContext(NavbarContext)

    function openAnimation() {
        const tl = gsap.timeline();

        tl.set(FullScreenNav.current, { display: "block" });

        tl.to(".stairing", {
            height: "100%",
            stagger: { amount: -0.25 },
            duration: 0.25,
        })
        tl.to(".navlinks", { opacity: 1 }, "-=0.2")
        tl.to(".links", {
            opacity: 1,
            rotateX: 0,
            stagger: { amount: 0.25 },
            duration: 0.4,
        })
        tl.to(".button", { opacity: 1, ease: "power2.inOut" }, "-=0.2");
    }

    function exitAnimation() {
        const tl = gsap.timeline();

        tl.to(".button", {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.2,
        })
        tl.to(".links", {
            opacity: 0,
            rotateX: -90,
            stagger: { amount: 0.15 },
            duration: 0.15,
        })
        tl.to(".navlinks", { opacity: 0, duration: 0.2 }, "-=0.1")
        tl.to(".stairing", {
            height: "0%",
            stagger: { amount: -0.25 },
            duration: 0.2,
        })
        tl.set(FullScreenNav.current, { display: "none" });
    }

    useGSAP(() => {
        if (navbarOpen) {
            openAnimation();
        } else {
            exitAnimation();
        }
    }, [navbarOpen]);



    return (
        <div ref={FullScreenNav} id='full-screen-nav' className=' hidden z-56 overflow-hidden h-screen w-full top-0 left-0 text-white  absolute '>

            <div className='h-screen w-full fixed '>
                <div className='flex h-full w-full'>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                    <div className='stairing h-full w-1/6 bg-black'></div>
                </div>
            </div>

            <div id='FullScreenNav' >

                <div className=' navlinks cursor-pointer flex justify-between items-start absolute w-full p-3 '>
                    <div>
                        <Link
                            onClick={() => {
                                setNavbarOpen(false)
                            }}
                            to={'/'}>
                            <div className='w-[9.12vw] '>
                                <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div
                        onClick={() => {
                            setNavbarOpen(false)
                        }}
                        className='h-[8.35vw] w-[8.35vw] overflow-hidden  relative cursor-pointer'>
                        <div className='h-[20vw] w-[0.2vw] rotate-45 origin-top right-0 absolute bg-[#D2FD60] '></div>
                        <div className='h-[20vw] w-[0.2vw] -rotate-45 origin-top absolute bg-[#D2FD60]'></div>
                    </div>
                </div>

                <div className='py-[29vh]'>
                    <div
                        className="links opacity-1  border-t-1 relative border-white h-[11vh] origin-top cursor-pointer"
                        onMouseEnter={() => {
                            NavRef.current.style.height = "100%";
                            NavRef.current.style.opacity = "100%";
                        }}
                        onMouseLeave={() => {
                            NavRef.current.style.height = "0%";
                            NavRef.current.style.opacity = "50%";

                        }}
                    >
                        <Link
                            onClick={() => {
                                setNavbarOpen(false)
                            }}
                            to={'/projets'}>
                            <h1 className="font-[font2] text-[7.8vw] uppercase leading-[0.8] py-4 text-center">Projets</h1>
                            <div
                                ref={NavRef}
                                className="absolute h-0 overflow-hidden transition-all duration-300 top-0 flex items-center gap-10 bg-[#D2FD60] text-black"
                            >
                                <div className="flex moveX h-full items-center gap-10">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">
                                        Pour Tout Voir
                                    </h2>
                                    <img
                                        className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full"
                                        src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                        alt=""
                                    />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">
                                        Pour Tout Voir
                                    </h2>
                                    <img
                                        className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full"
                                        src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className='flex moveX h-full items-center gap-10'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Tout Voir</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Tout Voir</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="links opacity-1  border-t-1 relative border-white h-[11vh] origin-top cursor-pointer"
                        onMouseEnter={() => {
                            NavRef1.current.style.height = "100%";
                            NavRef1.current.style.opacity = "100%";
                        }}
                        onMouseLeave={() => {
                            NavRef1.current.style.height = "0%";
                            NavRef1.current.style.opacity = "50%";
                        }}
                    >
                        <Link
                            onClick={() => {
                                setNavbarOpen(false)
                            }}
                            to={'/agence'}>
                            <h1 className="font-[font2] text-[7.8vw] uppercase leading-[0.8] py-4 text-center">Agence</h1>
                            <div
                                ref={NavRef1}
                                className="absolute h-0 overflow-hidden transition-all duration-300 top-0 flex items-center gap-10 bg-[#D2FD60] text-black"
                            >
                                <div className="flex moveX h-full items-center gap-10">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Pour Tout Voir</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Pour Tout Voir</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                </div>
                                <div className='flex moveX h-full items-center gap-10'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Tout Voir</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Tout Voir</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="links opacity-1  border-t-1 relative border-white h-[11vh] origin-top cursor-pointer"
                        onMouseEnter={() => {
                            NavRef2.current.style.height = "100%";
                            NavRef2.current.style.opacity = "100%";
                        }}
                        onMouseLeave={() => {
                            NavRef2.current.style.height = "0%";
                            NavRef2.current.style.opacity = "50%";
                        }}
                    ><Link
                        onClick={() => {
                            setNavbarOpen(false)
                        }}
                        to={'/contact'}>
                            <h1 className="font-[font2] text-[7.8vw] uppercase leading-[0.8] py-4 text-center">
                                Contact
                            </h1>
                            <div
                                ref={NavRef2}
                                className="absolute h-0 overflow-hidden transition-all duration-300 top-0 flex items-center gap-10 bg-[#D2FD60] text-black"
                            >
                                <div className="flex moveX h-full items-center gap-10">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Pour Envoyer Un Fax</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Pour Envoyer Un Fax</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                </div>
                                <div className='flex moveX h-full items-center gap-10'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Envoyer Un Fax</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Pour Envoyer Un Fax</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="links opacity-1  border-y-1 relative border-white h-[11vh] origin-top cursor-pointer "
                        onMouseEnter={() => {
                            NavRef3.current.style.height = "100%";
                            NavRef3.current.style.opacity = "100%";
                        }}
                        onMouseLeave={() => {
                            NavRef3.current.style.height = "0%";
                            NavRef3.current.style.opacity = "50%";
                        }}
                    >
                        <Link
                            onClick={() => {
                                setNavbarOpen(false)
                            }}
                            to={'/'}>
                            <h1 className="font-[font2] text-[7.8vw] uppercase leading-[0.8] py-4 text-center">
                                blogue
                            </h1>
                            <div
                                ref={NavRef3}
                                className="absolute h-0 overflow-hidden transition-all duration-300 top-0 flex items-center gap-10 bg-[#D2FD60] text-black"
                            >
                                <div className="flex moveX h-full items-center gap-10">
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Lire Les Artiicles</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                    <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] text-center">Lire Les Artiicles</h2>
                                    <img className="h-[6vw] w-[18vw] shrink-0 object-cover rounded-full" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                </div>
                                <div className='flex moveX h-full items-center gap-10'>
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Lire  Les Artiicles</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]   text-center '>Lire  Les Artiicles</h2>
                                    <img className='h-[6vw] w-[18vw] shrink-0 object-cover rounded-full ' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div >

            </div>

            <div className='button absolute bottom-0 font-[font2] uppercase w-full justify-between items-center text-white flex  gap-2 '>
                <div className='px-35'></div>

                <div className=' justify-center flex gap-2 text-[0.85vw] '>
                    <h1 className='hover:text-[#D2FD60] cursor-pointer '>Politique de confidentialité</h1>
                    <h1 className='hover:text-[#D2FD60] cursor-pointer'>Avis de confidentialité</h1>
                    <h1 className='hover:text-[#D2FD60] cursor-pointer'>Rapport éthique</h1>
                    <h1 className='hover:text-[#D2FD60] cursor-pointer'>Options de consentement</h1>
                </div>

                <div className=' justify-center flex gap-2 '>
                    <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>fb</h1>
                    <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>ig</h1>
                    <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>in</h1>
                    <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>be</h1>
                </div>
            </div>
        </div >
    )
}

export default FullScreenNav
