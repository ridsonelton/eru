import { ContainerAnimation } from '@/app/utils/(animation)/containeranimation'
import { Klee_One } from 'next/font/google'

const klee = Klee_One({ weight: ['400'], subsets: ['latin'] })
export default function Skills() {
  return (
    <div className="tracking-wide text-lg">
      <div className="h-14" id="skills"></div>
      <ContainerAnimation>
        <div>
          <h2 className="tracking-wider text-2xl underline underline-offset-4 font-semibold text-sky-400 mb-2 ">Skills</h2>
          <p className="indent-4">He has pretty much skill, but his skill level is not the best of the best. He said that he want to be a Man who can do everything but I would say "he is just an inconsistency."</p>
          <div>
            <h3 className="text-2xl underline mt-6 mb-2 font-bold text-sky-300">Web Development</h3>
            <p className="indent-4">On his lot of activities he started learn Web Development in january 2023 and aiming to be fullstack Web Dveloper.</p>
            <div>
              <h4 className="text-xl text-sky-200 font-semibold my-2">Front End</h4>
              <ul className="flex flex-wrap text-ligthMode my-1 gap-1">
                <li className="rounded-full bg-green-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">HTML</li>
                <li className="rounded-full bg-green-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700">CSS</li>
                <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">Javascript</li>
                <li className="rounded-full bg-red-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">Typescript</li>
                <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">ReactJS</li>
                <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">NextJS</li>
                <li className="rounded-full bg-green-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">TailwindCSS</li>
              </ul>
              <p className="font-thin text-right text-sm italic">*colors based on confidence</p>
            </div>
            <div>
              <h4 className="text-xl text-sky-200 font-semibold my-2">Back End</h4>
              <p className="indent-4 text-red-900">not started learn yet</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl underline mt-6 mb-2 font-bold  text-sky-200">Video Editing</h3>
            <p className="indent-4">To fulfill his dream to become Movie Director he started to learn video editing</p>
            <ul className="flex flex-wrap text-ligthMode my-1 gap-1">
              <li className="rounded-full bg-green-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">Adobe Premiere</li>
              <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700">Adobe After Effect</li>
            </ul>
            <p className="font-thin text-right text-sm italic">*colors based on confidence</p>
          </div>
          <div>
            <h3 className="text-2xl underline mt-6 mb-2 font-bold text-sky-300">Architect</h3>
            <p className="indent-4">To support his school activities he learned some app</p>
            <ul className="flex flex-wrap text-ligthMode my-1 gap-1">
              <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700  ">AutoCAD</li>
              <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700">SketchUp</li>
              <li className="rounded-full bg-red-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700">Revit</li>
              <li className="rounded-full bg-yellow-400 px-2 py-1 m-1.5 shadow-lg shadow-gray-700">JWCAD</li>
            </ul>
            <p className="font-thin text-right text-sm italic">*colors based on confidence</p>
          </div>
        </div>
      </ContainerAnimation>
    </div>
  )
}
