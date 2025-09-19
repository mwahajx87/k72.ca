import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarContext } from '../context/NavContext'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.set(".heading", {
                rotate: -5
            })
        } else {
            gsap.set(".heading ", {
                rotate: 5
            })
        }
    })
    const { navbarOpen, setNavbarOpen } = useContext(NavbarContext)


    if (navbarOpen) {
        gsap.set('.contact', {
            delay: 0.5,
            display: 'none'
        })
    } else {
        gsap.set('.contact', {
            display: 'block'
        })
    }

    const slide = useRef(null)

    const [items, setItems] = useState(Array.from({ length: 5 }, (_, i) => i + 1));

    const loadMore = () => {
        setItems((prev) => [
            ...prev,
            ...Array.from({ length: 5 }, (_, i) => prev.length + i + 1),
        ]);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                loadMore();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div >
                {items.map((item) => (
                    <div key={item} className='contact bg-black h-[108vh] w-full text-white'>
                        <Navbar />
                        <div className=' px-[11vw] relative pt-6 h-[45vw]'>
                            <div className='h-full w-full '>
                                <div className='w-full h-1/4 flex items-center justify-center text-[10vw] -mt-6  font-[font1] uppercase '><span>Pour</span></div>
                                <div className='w-full h-1/4 flex items-center justify-center text-[10vw] -mt-7  font-[font1] uppercase '><span>parler de</span></div>
                                <div className='w-full h-1/4 flex items-center justify-center text-[10vw] -mt-7  font-[font1] uppercase '><span>votre</span></div>
                                <div className='w-full h-1/4 flex items-center justify-center text-[10vw] -mt-7  font-[font1] uppercase '><span>projet</span></div>
                            </div>
                            <div className='absolute bottom-34 left-17 font-[font2] text-center  font-[500] '>
                                <h2>Dans un écran ou un bureau. <br />
                                    Chez vous. Chez nous. <br />
                                    Partout.</h2>
                            </div>
                            <div className='absolute bottom-34 right-17  font-[font2] text-center font-[500]  '>
                                <a className='w-fit hover:border-b ' href='/' >525 Av. Viger O - Suite 400 <br />
                                    Montréal, QC H2Z 1G6 →</a>
                            </div>
                        </div>
                        <div className='overflow-hidden h-1/3 -mt-10 flex items-center justify-center '>
                            <div
                                className=" relative rotate-5 heading h-[16vh]  origin-top cursor-pointer"
                                onMouseLeave={() => {
                                    slide.current.style.height = "100%";
                                }}
                                onMouseEnter={() => {
                                    slide.current.style.height = "0%";
                                }}
                            >
                                <div
                                    className=" relative  h-full overflow-hidden flex gap-10 bg-white  text-black">
                                    <div className='flex moveX z-10 h-full items-center mt-2 gap-10'>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                    </div>
                                    <div className='flex moveX z-10 h-full items-center mt-2 gap-10'>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                        <h2 className='whitespace-nowrap font-[font2] text-[12vw] p-0 uppercase leading-[0.8] text-center '>bonjour@k72.ca </h2>
                                    </div>

                                </div>
                                <div ref={slide} className='cursor-pointer  bg-[#D2FD60] flex items-center justify-center  transition-all h-full  w-full absolute top-0'>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 bg-amber-500 relative'>
                            <div className='uppercase absolute bottom-0 left-[45.7vw] font-[font2]  font-[500]  '><h2>Suivez-nous</h2></div>
                        </div>
                        <div className=' justify-center flex gap-2 mt-12 bg-black  '>
                            <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>fb</h1>
                            <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>ig</h1>
                            <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>in</h1>
                            <h1 className='uppercase border-2 rounded-full cursor-pointer px-[1vw]  text-[2.5vw] hover:border-[#D2FD60] hover:text-[#D2FD60]'>be</h1>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}


export default Contact
