import PropTypes from 'prop-types'
import styled from 'styled-components'

function FlexItem({ width, children }) {
  return (
    <FlexItem.Container
      width={width}
    >
      {children}
    </FlexItem.Container>
  )
}

FlexItem.propTypes = {
  width: PropTypes.string,
}

FlexItem.defaultProps = {
  width: '100%',
}

export default FlexItem

FlexItem.Container = styled.div`
  flex: 1 1 ${props => props.width};
  max-width: ${props => props.width};
`
