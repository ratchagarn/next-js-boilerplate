import styled from 'styled-components'

function Button({ onClick, children, ...props }) {
  return <Button.Body onClick={onClick} {...props}>{children}</Button.Body>
}

export default Button

Button.Body = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
