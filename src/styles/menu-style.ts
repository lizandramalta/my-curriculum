import styled from 'styled-components'

export const Menu = styled.nav`
  grid-column-start: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: ${(props) => props.theme.colors.blue.default};
  font-size: ${(props) => props.theme.typography.fontScale.h5};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};

  span:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.blue.dark};
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.black.default};

    span {
      padding: 16px;
      text-align: center;
      width: 100%;
      border-width: 3px 0 0 0;
      border-color: ${(props) => props.theme.colors.blue.default};
      border-style: solid;

      &:hover {
        border-color: ${(props) => props.theme.colors.blue.dark};
        background-color: ${(props) => props.theme.colors.black.dark};
        color: ${(props) => props.theme.colors.blue.dark};
      }
    }
  }
`
