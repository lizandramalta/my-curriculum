import styled from 'styled-components'

export const ContactButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 56px;
  right: 40px;
  border: 0;
  background-color: ${(props) => props.theme.colors.black.dark};
  color: ${(props) => props.theme.colors.blue.default};
  padding: 16px 32px;
  border-radius: 24px;

  &:hover {
    color: ${(props) => props.theme.colors.blue.dark};
  }

  .icon {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 48px;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    .text {
      display: none;
    }

    .icon {
      display: block;
    }
  }
`
