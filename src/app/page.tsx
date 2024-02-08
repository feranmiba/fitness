'use client'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Newsletter />
    </main>
  )
}
