import { useEffect } from 'react'
import piggy from '../../../../../public/welcome.json'
import Lottie from 'lottie-react'
import { motion as m } from 'framer-motion'

export default function Onboarding1({ setOnboarding }: any) {
  setTimeout(() => setOnboarding(2), 3000)

  const style = {
    height: 400,
  }
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="flex justify-center -mt-10">
      <div>
        <Lottie animationData={piggy} style={style}></Lottie>
      </div>
    </m.div>
  )
}
