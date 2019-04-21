import React from 'react'
import styled from '../../utils/styled'

const Container = styled.div`
  border-radius: 5px;
  width: 75vw;
  margin: 0 1vw;
  height: 94vh;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 32px;
    margin-left: 25px;
  }

  svg {
    @media screen and (max-width: 768px) {
      width: 95vw;
      height: auto;
    }
  }
`
const MapContainer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <Container>
    <svg
      width="902"
      height="745"
      viewBox="0 0 902 769"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  </Container>
)

export default MapContainer