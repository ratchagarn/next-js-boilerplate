import styled from 'styled-components'

function PageContainer({ children }) {
  return <PageContainer.Container>{children}</PageContainer.Container>
}

export default PageContainer

PageContainer.Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`
