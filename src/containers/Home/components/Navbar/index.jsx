import styled from "styled-components"
import { navbarData } from "../../../../data"

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 !important;

  color: #464646;

  font-family: "Syncopate", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Navbar = () => {
  const { menuItems } = navbarData
  return (
    <Section data-scroll-section>
      {menuItems.map(({ id, label }) => (
        <span key={id}>{label}</span>
      ))}
    </Section>
  )
}

export default Navbar
