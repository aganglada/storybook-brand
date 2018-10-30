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
  height: 30px;
  padding: 5px 10px;
  border-right: 1px solid;
`
const Value = styled.span`
  padding: 5px 10px;
`

function Space({ value, children }) {
  return (
    <Wrapper>
      <Visual value={value}>{value}</Visual>
      <Value>{children}</Value>
    </Wrapper>
  )
}

export default Space
