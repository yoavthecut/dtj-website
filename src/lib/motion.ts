import type { Variants, Transition } from "framer-motion";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" } as Transition,
  }),
};
