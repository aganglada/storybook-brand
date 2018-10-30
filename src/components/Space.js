import React from 'react'
import styled, { css } from 'styled-components'

const smallSpace = css`
  padding: 5px;
`
const mediumSpace = css`
  padding: 5px;
`
const largeSpace = css`
  padding: 5px;
`

const Wrapper = styled.div`
  ${props => (props.size === 'small' ? smallSpace : null)};
  ${props => (props.size === 'medium' ? mediumSpace : null)};
  ${props => (props.size === 'large' ? largeSpace : null)};
`

function Space({ size = 'small', children }) {
  return <Wrapper size={size}>{children}</Wrapper>
}

export default Space
