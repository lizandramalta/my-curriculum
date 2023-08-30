import styled from 'styled-components'

export const ExperienceSection = styled.section`
  display: flex;
  padding: 56px 162px;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  background-color: ${(props) => props.theme.colors.green.dark};
  color: ${(props) => props.theme.colors.white.default};

  .section-description-container,
  .contribution-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .contribution-list {
    margin-top: 8px;
    margin-left: 32px;
    font-size: ${(props) => props.theme.typography.fontScale.p};
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    padding: 56px 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    padding: 32px 16px;
    flex-direction: column;
    gap: 24px;
  }
`
