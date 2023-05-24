import { motion as m, AnimatePresence } from 'framer-motion'

export const ContainerAnimation = ({ children }: { children: React.ReactNode }) => (
  <>
    <AnimatePresence>
      <m.div initial={{ opacity: 0, y: -9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }} transition={{ delay: 0.1, duration: 0.5 }}>
        {children}
      </m.div>
    </AnimatePresence>
  </>
)
