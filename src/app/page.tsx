'use client'

import Header from './components/header'
import Onboarding2 from './components/(onboarding)/onboarding2'
import Onboarding1 from './components/(onboarding)/onboarding1'
import { useEffect, useRef, useState } from 'react'
import Onboarding3 from './components/(onboarding)/onboarding3'
import Onboarding4 from './components/(onboarding)/onboarding4'

export default function Home() {
  const [onboarding, setOnboarding] = useState<number>(1)
  const [appear, setAppear] = useState<boolean>(true)

  const onboardingComponent = () => {
    switch (onboarding) {
      case 1: {
        return <Onboarding1 setOnboarding={setOnboarding}></Onboarding1>
      }
      case 2: {
        return <Onboarding2 setOnboarding={setOnboarding}></Onboarding2>
      }
      case 3: {
        return <Onboarding3 setOnboarding={setOnboarding}></Onboarding3>
      }
      case 4: {
        return <Onboarding4 setAppear={setAppear}></Onboarding4>
      }
    }
  }

  const [mode, setMode] = useState(true)
  const modeRef = useRef<HTMLBodyElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (mode == true) {
        modeRef.current?.classList.add('text-secondary', 'bg-darkMode')
        modeRef.current?.classList.remove('text-teritary', 'bg-lightMode')
      } else if (mode == false) {
        modeRef.current?.classList.add('text-teritary', 'bg-lightMode')
        modeRef.current?.classList.remove('text-secondary', 'bg-darkMode')
      }
    }, 750)
    if (onboarding == 2) {
      headRef.current?.classList.remove('hidden')
    }
  })
  console.log(modeRef.current?.classList)
  console.log(mode)
  return (
    <body ref={modeRef} className="container mx-auto lg:w-[40vw] sm:px-4 ">
      <div className="flex flex-col justify-center items-center ">
        <div ref={headRef} className="hidden">
          <Header setOnboarding={setOnboarding} appear={appear} setMode={setMode} mode={mode}></Header>
        </div>
        <div className="mt-24 mb-14">{onboardingComponent()}</div>
      </div>
    </body>
  )
}
