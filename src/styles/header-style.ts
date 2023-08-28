import styled from 'styled-components'

export const Header = styled.header`
  width: '100%';
  color: ${(props) => props.theme.colors.blue.default};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.colors.black.default};
  height: 90px;
  padding: 0 24px;

  .logo {
    grid-column-start: 1;
    padding: 16px 0;
    &:hover {
      cursor: pointer;
    }
  }

  .menuButton {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    height: 75px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;

    .menuButton {
      align-items: center;
      display: block;
      background-color: transparent;
      border-style: none;
      border-radius: 16px;
      padding: 8px;
      color: ${(props) => props.theme.colors.blue.default};

      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.colors.blue.dark};
      }
    }
  }
`
