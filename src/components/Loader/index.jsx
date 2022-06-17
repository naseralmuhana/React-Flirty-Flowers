import styled from "styled-components"
import { motion } from "framer-motion"

// const Container = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   background-color: #191919;
//   color: #dbd8d6;

//   position: fixed;
//   inset: 0;
//   z-index: 1;

//   font-size: 1.5vw;
//   text-transform: uppercase;
//   h1 {
//     font-family: "Bai Jamjuree", sans-serif;
//     font-weight: 600;
//   }
//   h2 {
//     font-family: "Bodoni Moda", serif;
//     font-weight: 700;
//     font-style: italic;
//     margin-top: 10px;
//   }
// `

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  background-color: #191919;
  color: #dbd8d6;
  font-size: 1.5vw;
  text-transform: uppercase;
  h1 {
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
  }
  h2 {
    font-family: "Bodoni Moda", serif;
    font-weight: 700;
    font-style: italic;
    margin-top: 10px;
  }
`

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      // delay: 2,
      yoyo: Infinity, // infinite time
      ease: "easeInOut",
    },
  },
}

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{ duration: 1 }}
    >
      <motion.h1 variants={textVariants} initial="hidden" animate="visible">
        Flirty flowers
      </motion.h1>
      <motion.h2 variants={textVariants} initial="hidden" animate="visible">
        Rio de Janeiro
      </motion.h2>
    </Container>
  )
}

export default Loader
