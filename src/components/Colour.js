import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  background-color: white;
`
const Visual = styled.span`
  background-color: ${props => props.value};
  height: 30px;
  width: 30px;
  border-right: 1px solid;
`
const Value = styled.span`
  padding: 5px 10px;
`

function Colour({ value, children }) {
  return (
    <Wrapper>
      <Visual value={value} />
      <Value>{children}</Value>
    </Wrapper>
  )
}

export default Colour
