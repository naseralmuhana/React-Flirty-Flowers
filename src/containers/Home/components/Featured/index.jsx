import { useRef } from "react"
import cn from "classnames"
import styled from "styled-components"
import { featuredData } from "../../../../data"
import { useOnScreen } from "../../../../hooks"

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  img {
    clip-path: inset(100% 0% 0% 0%);
    transition: clip-path 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    &.is-reveal {
      clip-path: inset(0% 0% 0% 0%);
    }
  }
  h6 {
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .layout {
    display: grid;
    gap: 10px;
  }
`
const RowLayout = styled.div`
  grid-template-rows: repeat(2, auto);
  img {
    width: 100%;
    object-fit: cover;
  }
`
const ColumnLayout = styled.div`
  grid-template-columns: 100px auto;
  align-items: flex-end;
  img {
    width: 100%;
    height: 125vh;
    object-fit: cover;
  }
  h6 {
    transform: translateX(100%) rotate(-90deg);
    transform-origin: left bottom;
    justify-self: self-end;
  }
`

const Featured = () => {
  const ref = useRef(null)
  const isIntersecting = useOnScreen(ref, 0.4)
  const [firstUrl, secondUrl] = featuredData
  return (
    <Section data-scroll-section>
      <RowLayout className="layout" ref={ref}>
        <h6>green</h6>
        <img
          src={firstUrl}
          alt="green"
          className={cn({ "is-reveal": isIntersecting })}
        />
      </RowLayout>
      <ColumnLayout className="layout">
        <h6>lily</h6>
        <img
          src={secondUrl}
          alt="lily"
          className={cn({ "is-reveal": isIntersecting })}
        />
      </ColumnLayout>
    </Section>
  )
}

export default Featured
