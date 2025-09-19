import React from 'react'
import Video from './Video'
import gsap from 'gsap'


const HomeTopText = () => {
        // gsap.to('',{

        // })
    return (
        <div className='font-[font1] text-center py-4 ' >
            <div className='link text-[8.8vw] tracking-wider uppercase leading-[8vw] flex justify-center items-center' >
                L'étincelle
            </div>
            <div className='link text-[8.8vw] tracking-wider uppercase leading-[8vw] flex justify-center items-center'>
                qui
                <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère</div>
            <div className='link text-[8.8vw] tracking-wider uppercase leading-[8vw] flex justify-center items-center'>
                la créativité
            </div>
        </div>
    )
} 

export default HomeTopText