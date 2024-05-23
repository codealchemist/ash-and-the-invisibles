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
    font-size: 1.25em;
    color: var(--color-3);
  }
`

export default List
