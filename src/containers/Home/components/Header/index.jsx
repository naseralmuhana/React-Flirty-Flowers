import styled from "styled-components"
import { headerData } from "../../../../data"
import HeaderTitle from "./HeaderTitle"

const Section = styled.section`
  position: relative;
`
const Menu = styled.ul`
  position: absolute;
  left: 0;
  top: 100px;

  color: #626262;

  font-family: "Syncopate", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  li {
    margin: 10px 0;
    clip-path: inset(0% 100% 0% 0%);
    transition: clip-path 2s cubic-bezier(0.77, 0, 0.175, 1);
    &.is-reveal {
      clip-path: inset(0% 0% 0% 0%);
    }
  }
`

const Header = () => {
  const { menu, titleFirstWord, titleSecondWord } = headerData
  return (
    <Section data-scroll-section>
      <Menu>
        {menu.map(({ id, label }) => (
          <li key={id} data-scroll>
            {label}
          </li>
        ))}
      </Menu>
      <HeaderTitle firstWord={titleFirstWord} secondWord={titleSecondWord} />
    </Section>
  )
}

export default Header
