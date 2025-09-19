import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const NavRef = useRef(null)
    const menuLine = useRef(null)
    const menuLine1 = useRef(null)
    const { navbarOpen, setNavbarOpen } = useContext(NavbarContext)

    return (
        <div className='z-4 flex justify-between items-start fixed top-0 w-full'>
            <Link to={'/'} className='p-3'>
                <div className='w-[9.12vw]'>
                    <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </Link>
            <div
                onClick={() => {
                    setNavbarOpen(true)
                }}
                onMouseEnter={() => {
                    NavRef.current.style.height = '100%';
                    menuLine.current.style.backgroundColor = 'black';
                    menuLine1.current.style.backgroundColor = 'black';
                }}
                onMouseLeave={() => {
                    menuLine.current.style.backgroundColor = 'white';
                    menuLine1.current.style.backgroundColor = 'white';
                    NavRef.current.style.height = '0%';
                }}
                className=' bg-black cursor-pointer relative w-[15.6vw] h-[3.8vw]'>
                <div ref={NavRef} className='cursor-pointer bg-[#D2FD60] flex items-center justify-center  transition-all h-0  w-full absolute top-0'>
                </div>
                <div className=' relative h-full flex items-center justify-center  '>
                    <div className=' h-full pr-8 w-full flex gap-1.5 flex-col justify-center items-end'>
                        <div ref={menuLine} className=' w-[4vw] h-[.8px] bg-white' ></div>
                        <div ref={menuLine1} className=' w-[2vw] h-[.8px] bg-white' ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
