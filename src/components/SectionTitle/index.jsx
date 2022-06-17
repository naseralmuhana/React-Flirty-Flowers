import styled from "styled-components"

const Title = styled.h6`
  font-family: "Syncopate", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin-bottom: 50px;

  color: #626262;
`

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default SectionTitle
