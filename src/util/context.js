import React, {useContext } from 'react';


const DnDContext = React.createContext()

export const DnDProvider = ({children}) => {


  return <DnDContext.Provider value={{}}>
    {children}
  </DnDContext.Provider>
}

export const useDndContext = () => {
  return useContext(DnDContext);
}