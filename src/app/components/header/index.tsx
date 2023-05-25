'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import darkmode from '../../../../public/darkmode.json'
import babi from 'public/pigIcon.svg'
import Logo from '../logo'

export default function Header({ setOnboarding, appear, setMode, mode }: any) {
  const a = useRef<HTMLDivElement>(null)
  const [colors, setColors] = useState('')

  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    setTimeout(() => {
      if (mode == true) {
        setColors('#EEEEEE')
      } else {
        setColors('#181823')
      }
    }, 750)
  })

  useEffect(() => {
    if (appear == false) {
      a.current!.classList.add('hidden')
    } else {
      a.current!.classList.remove('hidden')
    }
  })
  useEffect(() => {
    lottieRef.current!.playSegments([100, 101], true)
  }, [])

  const style = {
    height: 35,
  }
  return (
    <main className="py-4 fixed bg-opacity-5 left-0 right-0 top-0 bg-teritary flex justify-center backdrop-blur-sm ">
      <div className="flex justify-between w-full mx-5 md:w-[50vw] lg:w-[40vw]">
        <div onClick={() => setOnboarding(2)} className="flex justify-center cursor-pointer">
          <div className="group flex gap-1">
            <div className="mt-1 -rotate-6 group-hover:rotate-12">
              <Logo color={`${colors}`}></Logo>
            </div>
            <h1 className="text-xl font-extrabold tracking-wider">ERU</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <div ref={a} className="cursor-pointer my-auto " onClick={() => setOnboarding(4)}>
            skip..
          </div>

          <Lottie
            className="cursor-pointer"
            lottieRef={lottieRef}
            onClick={() => {
              setMode(!mode)
              if (mode == false) {
                lottieRef.current!.playSegments([0, 100], true)
              } else if (mode == true) {
                lottieRef.current!.playSegments([100, 170], true)
              }
            }}
            animationData={darkmode}
            loop={false}
            autoPlay={false}
            style={style}
          ></Lottie>
        </div>
      </div>
    </main>
  )
}
