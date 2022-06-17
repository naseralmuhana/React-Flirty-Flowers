import { Loader } from "../../components"
import { useLocomotiveScroll, usePreLoader } from "../../hooks"
// prettier-ignore
import { Navbar, Header, Featured, About, Gallery, Footer } from "./components"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

const MainContainer = styled.main`
  padding: 0 5vw;
  section {
    padding: 100px 0;
  }
`

const Home = () => {
  const { preLoader } = usePreLoader({ isPreLoading: true, delay: 3 })
  useLocomotiveScroll(!preLoader)

  return (
    <>
      <AnimatePresence>{preLoader ? <Loader /> : null}</AnimatePresence>
      <AnimatePresence>
        {!preLoader && (
          <MainContainer className="App" id="App" data-scroll-container>
            <Navbar />
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
          </MainContainer>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home
