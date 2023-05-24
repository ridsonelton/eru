import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'
import { Klee_One } from 'next/font/google'
import Image from 'next/image'
import smjc from 'public/smjc.png'
import babel from 'public/babel.png'

const klee = Klee_One({ weight: ['400'], subsets: ['latin'] })
export default function Works() {
  return (
    <div className="tracking-wide text-lg">
      <div className="h-14" id="works"></div>
      <ContainerAnimation>
        <div>
          <h2 className="tracking-wider text-2xl underline underline-offset-4 font-semibold text-indigo-400 mb-2">Works</h2>
          <p className="indent-4">Because his works is "mostly not a personal project, these are the only works he can show". Is what he said but i think it was because others project is trash and he's too shame to show it.</p>
        </div>
        <div className="flex flex-wrap gap-4 my-5 justify-center">
          <div className="flex justify-center flex-col items-center">
            <Image className="rounded-2xl" src={smjc} width={200} alt="smjc"></Image>
            <h5 className="text-xl">SMJC</h5>
            <p className="text-sm font-thin">Landing Page For a Company called SMJC</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Image className="rounded-2xl" src={babel} width={200} alt="smjc"></Image>
            <h5 className="text-xl">ERU</h5>
            <p className="text-sm font-thin">Portofolio Website</p>
          </div>
        </div>
      </ContainerAnimation>
    </div>
  )
}
