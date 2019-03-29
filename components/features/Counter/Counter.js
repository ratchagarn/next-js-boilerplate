import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '<components>/Button'

function Counter({ initCount }) {
  const [count, setCount] = useState(initCount)

  return (
    <Button onClick={handleIncreaseCount}>{count}</Button>
  )

  function handleIncreaseCount() {
    setCount(count + 1)
  }
}

Counter.propTypes = {
  initCount: PropTypes.number,
}

Counter.defaultProps = {
  initCount: 0,
}

export default Counter
