import cn from "classnames"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { SectionTitle } from "../../../../components"
import { aboutData } from "../../../../data"
import { useOnScreen } from "../../../../hooks"
import { SplitText } from "../../../../utils"

const Section = styled.section`
  p {
    font-size: 70px;
    line-height: 1.12;
    opacity: 0;
    > div {
      opacity: 0;
      transform: translate(0);
    }
    &.is-reveal {
      opacity: 1;
      transform: translate(0);
    }
  }
`

const About = () => {
  const ref = useRef(null)
  const isIntersecting = useOnScreen(ref, 0.1)
  const { title, content } = aboutData

  useEffect(() => {
    if (isIntersecting) {
      const split = new SplitText("#headline", { type: "lines" })

      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power2",
      })
    }
  }, [isIntersecting])

  return (
    <Section data-scroll-section>
      <SectionTitle title={title} />
      <p
        ref={ref}
        id="headline"
        className={cn({ "is-reveal": isIntersecting })}
      >
        {content}
      </p>
    </Section>
  )
}

export default About
