import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { galleryData } from "../../../../data"
import GalleryItem from "./GalleryItem"

const Section = styled.section`
  background-color: #d53f41;
  margin: 0 -5vw;
`
const GalleryContainer = styled.div`
  position: relative;
  width: 400%;
  height: 80vh;
  padding: 10vh 0;

  display: flex;
  flex-wrap: nowrap;
`
const GalleryCounter = styled.div`
  position: absolute;
  top: 10%;
  left: 100px;
  z-index: 1;
  line-height: 16px;

  /* mix-blend-mode: difference; */
  color: #dbd8d6;
`
const Divider = styled.span`
  content: "";
  display: inline-block;
  width: 6.25vw;
  height: 1px;
  margin: 7px 10px;
  background-color: #dbd8d6;
`

const Gallery = () => {
  const ref = useRef(null)
  const [activeImage, setActiveImage] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      const items = gsap.utils.toArray(".gallery-item")
      gsap.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#App",
          pin: true,
          scrub: 1,
          snap: 1 / (items.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      })

      ScrollTrigger.refresh()
    })
  }, [])

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1)
  }

  return (
    <Section data-scroll-section>
      <GalleryContainer ref={ref}>
        <GalleryCounter>
          <span>{activeImage}</span>
          <Divider />
          <span>{galleryData.length}</span>
        </GalleryCounter>
        {galleryData.map((image, index) => (
          <GalleryItem
            key={image.id}
            {...image}
            index={index}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </GalleryContainer>
    </Section>
  )
}

export default Gallery
