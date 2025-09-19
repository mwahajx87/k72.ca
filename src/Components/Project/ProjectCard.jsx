import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px]  overflow-hidden h-full'>
                <img className='w-full h-full object-cover' src={props.image1} alt="" />
                <div className=' opacity-0 transition-all group-hover:opacity-100 w-full h-full absolute top-0 left-0 bg-black/20 flex items-center justify-center' >
                    <h2 className='font-[font2] uppercase text-white border-2 text-5xl rounded-full px-6   pt-2'>voir le projet</h2>
                </div>
            </div>
            <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px]  overflow-hidden h-full'>
                <img className='w-full h-full object-cover' src={props.image2} alt="" />
                <div className=' opacity-0 transition-all group-hover:opacity-100 w-full h-full absolute top-0 left-0 bg-black/20 flex items-center justify-center' >
                    <h2 className='font-[font2] uppercase text-white border-2 text-5xl rounded-full px-6   pt-2'>voir le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard