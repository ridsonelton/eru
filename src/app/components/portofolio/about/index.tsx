import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'
import { Klee_One } from 'next/font/google'

const klee = Klee_One({ weight: ['400'], subsets: ['latin'] })
export default function About() {
  return (
    <div className="tracking-wide text-lg">
      <div className="h-14" id="about"></div>
      <ContainerAnimation>
        <div>
          <h2 className="tracking-wider text-2xl underline underline-offset-4 font-semibold text-emerald-400 mb-2">About Him</h2>
          <p className="indent-4">
            My owner ERU <span className="font-thin"> (of course not his real name)</span> is an international student from <span className="text-red-600">Indonesia</span> and now learning about architecture and building installation at
            SCoT <span className="font font-thin">(Shizuoka College of Technology)</span> he has passion in several fields which are web development and video editing.
          </p>
          <ul>
            <h3 className="text-2xl underline mt-6 mb-2 font-bold text-emerald-200">Bio</h3>
            <li className="flex">
              <span className="basis-14">2000</span>
              <span className="font-thin basis-3/4 ">Born in Southeast Celebes, Indonesia</span>
            </li>
            <li className="flex ">
              <span className="basis-14">2019</span>
              <span className="font-thin basis-3/4">Arrive in Japan</span>
            </li>
            <li className="flex ">
              <span className="basis-14">2019</span>
              <span className="font-thin basis-3/4">
                Learn Japanese in Shizuoka Japanese Languange School <span className={`${klee.className}`}>(静岡日本語教育センター)</span>
              </span>
            </li>
            <li className="flex ">
              <span className="basis-32">2019 to present</span>
              <span className="font-thin basis-3/5">
                Admision in SCoT <span className={`text-md ${klee.className}`}>(静岡県立工科短期大学校)</span> building installation faculty
              </span>
            </li>
          </ul>

          <h4 className="text-2xl underline mt-6 mb-2 font-bold text-emerald-200">Likes</h4>
          <p className="indent-4">Anime, Movies, Music, Playing Drums, Ramen, Make Things, Developing Project</p>
        </div>
      </ContainerAnimation>
    </div>
  )
}
