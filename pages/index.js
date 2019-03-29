import PageLayout from '<layouts>/PageLayout'
import PageContainer from '<layouts>/PageContainer'
import Counter from '<components>/features/Counter/Counter'

function PageIndex() {
  return (
    <PageLayout>
      <PageContainer>
        <h1>Page Index</h1>
        <Counter />
      </PageContainer>
    </PageLayout>
  )
}

export default PageIndex
