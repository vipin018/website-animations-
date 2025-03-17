import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'



const App = () => {

  useGSAP(() => {
    gsap.to("#box", {
      rotation: 360,
      x: 100,
      duration: 1,
      ease: "power2.inOut",
    })
  })

  return (
    <main>
      <div id="box">

      </div>
    </main>
  )
}

export default App