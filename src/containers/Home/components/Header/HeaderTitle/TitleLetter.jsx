import { motion } from "framer-motion"
import styled from "styled-components"

const Letter = styled(motion.h1)`
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 20vw;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  /* @media (max-width: 1220px) {
    font-size: 16vw;
  } */
  /* @media (max-width: 900px) {
    font-size: 15vw;
  } */
`

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const TitleLetter = ({ letter, scrollDelay }) => {
  return (
    <Letter
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      data-scroll
      data-scroll-delay={scrollDelay}
      data-scroll-speed="4"
    >
      {letter}
    </Letter>
  )
}

export default TitleLetter
