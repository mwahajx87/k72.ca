import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
    const currentPath = useLocation().pathname
    const stairDivRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairDivRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: '0%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairDivRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairDivRef} className='fixed top-0 z-30 flex h-screen w-full'>
                <div className='flex h-full w-full'>
                    <div className='stair h-full w-1/6 bg-black'></div>
                    <div className='stair h-full w-1/6 bg-black'></div>
                    <div className='stair h-full w-1/6 bg-black'></div>
                    <div className='stair h-full w-1/6 bg-black'></div>
                    <div className='stair h-full w-1/6 bg-black'></div>
                    <div className='stair h-full w-1/6 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef} >
                {props.children}
            </div>
        </div>
    )
}

export default Stair