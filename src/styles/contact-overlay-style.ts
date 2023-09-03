import styled from 'styled-components'

export const ContactOverlay = styled.div`
  width: 343px;
  padding-left: 56px;
  height: 175px;
  background-color: ${(props) => props.theme.colors.black.dark};
  color: ${(props) => props.theme.colors.white.default};
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 24px;
  border-radius: 24px;
  position: fixed;
  bottom: 32px;
  right: 40px;

  .contact-item {
    display: flex;
    gap: 8px;
  }

  .close-icon {
    cursor: pointer;
    border: 0;
    position: absolute;
    top: 16px;
    right: 16px;
    color: ${(props) => props.theme.colors.blue.default};
    background-color: transparent;

    &:hover {
      color: ${(props) => props.theme.colors.blue.dark};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 311px;
    padding-left: 40px;
    height: 144px;
    gap: 16px;
    position: sticky;

    .contact-item-information {
      font-size: ${(props) => props.theme.typography.fontScale.p};
    }
  }
`
