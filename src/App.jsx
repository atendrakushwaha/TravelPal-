import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Layout from './Layout'
import Footer from './Component/Footer'
import HomePage from './Component/HomePage'
import TripPlan from './Component/TripPlan'
import FeaturedDestinations from './Component/Destinations'
import TravelBooking from './Component/TravelBooking'
import Login from './Component/Login'
import Journal from './Component/Journal'
import SignUp from './Component/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tripplan" element={<TripPlan />} />
          <Route path='Destinations' element ={<FeaturedDestinations/>}/>
          <Route path='TravelBooking' element = {<TravelBooking/>}/>
          <Route path="Login" element={< Login />} />
          <Route path='Signup' element={<SignUp />} />
          <Route path="Journal" element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

