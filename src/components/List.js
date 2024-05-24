import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;

  // Use custom image for list items.
  li {
    // Use custom emoji for list items.
    &::before {
      content: '·';
      margin-right: 0.5em;
    }
    padding-left: 1.5em;
    margin-bottom: 0.5em;
    color: var(--color-3);
    font-size: 1.25em;

    // Adjust size for prop "size".
    // We support: "sm", "md", "lg", "xl".
    // Responsive: size adjusts to screen width.
    ${({ size }) => {
      let output = ''
      if (size === 'sm') {
        output = `
          font-size: 1em;

          @media (min-width: 768px) {
            font-size: 1.25em;
          }
        `
      }
      if (size === 'md') {
        output = `
          font-size: 1.25em;

          @media (min-width: 768px) {
            font-size: 1.5em;
          }
        `
      }
      if (size === 'lg') {
        output = `
          font-size: 1.5em;

          @media (min-width: 768px) {
            font-size: 1.75em;
          }
        `
      }
      if (size === 'xl') {
        output = `
          font-size: 2em;

          @media (min-width: 768px) {
            font-size: 2.25em;
          }
        `
      }
      return output
    }}
  }
`

export default List
