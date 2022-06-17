import { motion } from "framer-motion"
import styled from "styled-components"
import TitleLetter from "./TitleLetter"

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.second-word {
    margin-top: -60px !important;
    @media (max-width: 800px) {
      margin-top: -30px !important;
    }
  }
`
const titleVariants = {
  hidden: { opacity: 0, y: "20%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
}

const TitleLetterContainer = ({ word, className, variantsDelay = 0.5 }) => {
  return (
    <Container
      className={className}
      variants={titleVariants}
      initial="hidden"
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: variantsDelay,
        },
      }}
    >
      {word.map(({ id, letter, scrollDelay }) => (
        <TitleLetter key={id} letter={letter} scrollDelay={scrollDelay} />
      ))}
    </Container>
  )
}

export default TitleLetterContainer
