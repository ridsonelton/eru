import { ChatBox } from '@/app/utils/chatbox'
import piggy from '../../../../../public/bavi.json'
import Lottie from 'lottie-react'
import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'

export default function Onboarding2({ setOnboarding }: any) {
  const style = {
    height: 400,
  }
  return (
    <ContainerAnimation>
      <div className="flex flex-col justify-center items-center ">
        <ChatBox>
          <h5 className="">
            Hi, my name is <span className="text-premiere">Bavi</span> <span className="text-sm italic text text-pink-200 pr-1"> (/ba.bi/) </span> i am <span className="text-lime-300">ERU`s</span> pet
            <span className={`text-xl`}> よろしく。</span>
            <br />
            before you click the next button i'll warn you this will be soo tedious and cringe.
          </h5>
        </ChatBox>
        <div
          className="flex
        justify-center "
        >
          <Lottie animationData={piggy} style={style}></Lottie>
        </div>
        <div className="flex w-full justify-end">
          <button
            onClick={() => {
              setOnboarding(3)
            }}
            className="text-secondary px-4 py-2 bg-pink-700 rounded-lg hover:bg-pink-800"
          >
            Next
          </button>
        </div>
      </div>
    </ContainerAnimation>
  )
}
