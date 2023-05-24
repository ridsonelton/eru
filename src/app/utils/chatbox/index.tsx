export const ChatBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-quaternary text-secondary bg-opacity-70 p-4 rounded-lg text-lg xl:w-[30vw] lg:w-[40vw] md:w-[50vw] mx-4 font-thin tracking-wide justify-center flex">{children}</div>
}
