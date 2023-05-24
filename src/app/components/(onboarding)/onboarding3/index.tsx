import { ChatBox } from '@/app/utils/chatbox'
import piggy from '../../../../../public/alert.json'
import Lottie from 'lottie-react'
import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'

export default function Onboarding3({ setOnboarding }: any) {
  const style = {
    height: 400,
  }
  return (
    <ContainerAnimation>
      <div className="flex flex-col justify-center items-center">
        <ChatBox>
          <h5 className=" text-red-400">I Already Warned You!!</h5>
        </ChatBox>
        <div
          className="flex
        justify-center my-8"
        >
          <Lottie animationData={piggy} style={style}></Lottie>
        </div>
        <div className="flex justify-end w-full gap-3">
          <button
            onClick={() => {
              setOnboarding(2)
            }}
            className="text-secondary px-4 py-2 bg-pink-700 rounded-lg hover:bg-pink-800"
          >
            Prev
          </button>
          <button
            onClick={() => {
              setOnboarding(4)
            }}
            className="text-secondary px-4 py-2 bg-pink-700 rounded-lg hover:bg-pink-800 flex flex-col items-center"
          >
            <span>Next</span>
            <span className="text-xs -mt-2 text-gray-300">( if you insist )</span>
          </button>
        </div>
      </div>
    </ContainerAnimation>
  )
}
