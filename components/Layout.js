import React from 'react'
import NavBar from './NavBar'
import SideNav from './SideNav'

const Layout = ({ children }) => {
  return (
    <div className="grid-cols-5 md:grid">
      <NavBar />
      <div className="col-span-3 px-3 md:py-10">{children}</div>
      <SideNav />
    </div>
  )
}

export default Layout
