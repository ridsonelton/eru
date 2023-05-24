import { useEffect, useState } from 'react'
import Ramen from '../../ramen'
import { ChatBox } from '@/app/utils/chatbox'
import About from '../../portofolio/about'
import Skills from '../../portofolio/skills'
import Works from '../../portofolio/works'
import steam from '../../../../../public/steam.json'
import Lottie from 'lottie-react'
import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'

export default function Onboarding4({ setAppear }: any) {
  useEffect(() => {
    setAppear(false)
    return () => {
      setAppear(true)
    }
  }, [])
  const [component, setComponent] = useState<number>(1)
  const portofolioComponent = () => {
    switch (component) {
      case 1: {
        return <div></div>
      }
      case 2: {
        return <About></About>
      }
      case 3: {
        return <Skills></Skills>
      }
      case 4: {
        return <Works></Works>
      }
    }
  }
  const style = {
    height: 200,
  }

  return (
    <div className="flex justify-center  mx-auto max-w-min">
      <ContainerAnimation>
        <ChatBox>
          <h5 className="">
            My owner really <span className="text-red-500">loves</span>❤️ Ramen so he make separate to each condement. Click the Bowl if you wanna look{' '}
            <span className="text-emerald-400">
              {' '}
              <q>About him</q>{' '}
            </span>{' '}
            , click the Noodle to look his
            <span className="text-sky-400">
              {' '}
              <q>Skills</q>{' '}
            </span>
            , and click the Chopstick to look his{' '}
            <span className="text-indigo-400">
              {' '}
              <q>Works</q>
            </span>
            .
          </h5>
        </ChatBox>
        <div className="-mb-40 -ml-12 -z-20 relative">
          <Lottie animationData={steam} style={style}></Lottie>
        </div>
        <Ramen setComponent={setComponent}></Ramen>

        <div className="flex justify-center ">{portofolioComponent()}</div>
      </ContainerAnimation>
    </div>
  )
}
