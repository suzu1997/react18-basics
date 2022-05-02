import { NavBar } from './NavBar'

import type { FC, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-mono text-gray-600">
      <NavBar />
      <div className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
