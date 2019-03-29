import { Fragment } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { baseStyle } from '<config>/style'

const GlobalStyle = createGlobalStyle`
  ${baseStyle}
`

function PageLayout({ children }) {
  return (
    <ThemeProvider theme={{}}>
      <Fragment>
        <GlobalStyle />
        <PageLayout.Container>
          {children}
        </PageLayout.Container>
      </Fragment>
    </ThemeProvider>
  )
}

export default PageLayout

PageLayout.Container = styled.div`
  min-height: 100vh;
`
