import styled from 'styled-components'

function FlexContainer({ children }) {
  return <FlexContainer.Container></FlexContainer.Container>
}

export default FlexContainer

FlexContainer.Container = styled.div`
  display: flex;
`
