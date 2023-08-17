import React from 'react'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="main">
      <h1>Rachel's Pixabay Image Search</h1>
      <Outlet />
      <div className="footer"></div>
    </div>
  )
}

export default Layout