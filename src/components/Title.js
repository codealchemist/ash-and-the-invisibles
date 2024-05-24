import styled from 'styled-components'

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  font-weight: 400;

  i {
    display: flex;
    font-size: 0.5em;
    margin-top: 0.5em;
    color: var(--color-3);
  }

  // Adjust size for prop "size".
  // We support: "sm", "md", "lg", "xl".
  ${({ size }) => {
    let output = ''
    if (size === 'sm') {
      output = `
          font-size: 1em;
        `
    }
    if (size === 'md') {
      output = `
          font-size: 1.25em;
        `
    }
    if (size === 'lg') {
      output = `
          font-size: 1.5em;
        `
    }
    if (size === 'xl') {
      output = `
          font-size: 2em;
        `
    }
    return output
  }}
`

export default Title
