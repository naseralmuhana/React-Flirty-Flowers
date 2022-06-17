import { useEffect, useRef } from "react"
import styled from "styled-components"
import { useOnScreen } from "../../../../hooks"
import cn from "classnames"

const ItemContainer = styled.div`
  aspect-ratio: 16/9;
  height: 100%;
  width: 100vw;

  display: grid;
  grid-template-columns: 20vw 1fr 200px;

  &.is-reveal {
    .item-image {
      transform: scale(1);
      filter: none;
    }
  }
`
const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
`
const Info = styled.div`
  position: absolute;
  bottom: 10%;
  z-index: 1;

  color: #dbd8d6;
  transform: translateX(-20%);

  .title {
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 6vw;
    font-weight: 600;
    line-height: 6vw;
    /* -webkit-font-smoothing: antialiased; */
  }
  .subtitle {
    font-family: "Bodoni Moda", serif;
    font-size: 6vw;
    font-weight: 700;
    line-height: 6vw;

    position: relative;

    color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke: 2px #dbd8d6;
  }
  .category {
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 2vh;

    position: relative;

    -webkit-font-smoothing: antialiased;
  }
`
const Image = styled.div`
  background: ${(props) => `url(${props.src}) no-repeat center center /cover`};
  transform-origin: center;
  width: 100%;
  height: 100%;
  will-change: transform;

  transform: scale(0.7);
  transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  filter: grayscale(100%) sepia(20%) brightness(80%);
`

const GalleryItem = ({
  id,
  src,
  title,
  subtitle,
  category,
  index,
  updateActiveImage,
}) => {
  const ref = useRef(null)
  const isIntersecting = useOnScreen(ref, 0.5)
  useEffect(() => {
    if (isIntersecting) {
      updateActiveImage(index)
    }
  }, [isIntersecting, index, updateActiveImage])

  return (
    <ItemContainer
      className={cn("gallery-item", { "is-reveal": isIntersecting })}
      ref={ref}
    >
      <div />
      <Item>
        <Info>
          <h1 className="title">{title}</h1>
          <h6 className="subtitle">{subtitle}</h6>
          <p className="category">{category}</p>
        </Info>
        <Image src={src} className="item-image" />
      </Item>
      <div />
    </ItemContainer>
  )
}

export default GalleryItem
