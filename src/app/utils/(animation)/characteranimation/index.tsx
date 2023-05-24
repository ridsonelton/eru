import { motion as m } from 'framer-motion'

export default function CharacterAnimation({ children }: { children: React.ReactNode }) {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
      {children}
    </m.div>
  )
}
