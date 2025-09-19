import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div>
      <div className='w-full items-end flex flex-col h-fit' >
        <div className='w-[20vw] font-[font1] font-medium text-[1.1vw] mb-10'>
          <p className='text-end mr-8.5'>K72 est une agence qui</p>
          <p>pense chaque action pour nourrir la <br />
            marque. Demain, dans 5 mois et dans <br />
            5 ans. On cherche la friction qui crée <br />
            l’étincelle pour générer de l’émotion. <br />
            Pour assurer une relation honnête, on <br />
            est sans filtre, on dit ce qui doit être <br />
            dit, on fait ce qui doit être fait.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 font-[font2] '>
        <Link className='text-[6vw]  hover:border-[#D3FD4F] hover:text-[#D3FD4F] uppercase border-3 border-white rounded-full px-8 leading-[5.5vw] pt-2 mb-2 '
          to={'/projets'}
        >Projets</Link>
        <Link className='text-[6vw]  hover:border-[#D3FD4F] hover:text-[#D3FD4F] uppercase border-3 border-white rounded-full px-8 leading-[5.5vw] pt-2 mb-2 '
          to={'/agence'}
        >Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText