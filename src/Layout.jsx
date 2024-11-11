import React from 'react'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
