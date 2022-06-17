import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { footerData } from "../../../../data"
import { SectionTitle } from "../../../../components"
import gsap from "gsap"
import { SplitText } from "../../../../utils"
import { useOnScreen } from "../../../../hooks"
import cn from "classnames"

const Section = styled.section`
  text-align: center;
  padding-bottom: 200px !important;

  .location {
    font-family: "Bodoni Moda", serif;
    font-size: 18vw;
    font-weight: 700;
    text-transform: uppercase;
    /* opacity: 0;
    > div {
      opacity: 0;
      transform: translate(0);
    }
    &.is-reveal {
      opacity: 1;
    } */
  }
`

const Footer = () => {
  const ref = useRef(null)
  const isIntersecting = useOnScreen(ref, 0.05)
  const { title, content } = footerData
  useEffect(() => {
    if (isIntersecting) {
      var tl = gsap.timeline(),
        mySplitText = new SplitText("#location", { type: "words,chars" }),
        chars = mySplitText.chars //an array of all the divs that wrap each character

      tl.from(chars, {
        duration: 1.5,
        opacity: 0,
        scale: 0,
        y: 0,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
      })
    }
  }, [isIntersecting])

  return (
    <Section data-scroll-section>
      <SectionTitle title={title} />
      <h1
        id="location"
        ref={ref}
        className={cn("location")}
        data-scroll
        data-scroll-speed="2"
      >
        {content}
      </h1>
    </Section>
  )
}

export default Footer
