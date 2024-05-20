"use client"

import React, { useState } from 'react'
import { createContext } from 'react';


export const MenuContext = createContext()

const MenuContextProvider  = ( {children} ) => {
    const [open, setOpen] = useState(false);

    const target = () => {
        setOpen(!open);
    }

  return (
    <MenuContext.Provider value={{open, target}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider;