import React, { createContext, useState } from 'react'

export const NavbarContext = createContext()

const NavContext = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <NavbarContext.Provider value={{ navbarOpen, setNavbarOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavContext
