import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: ${(props) => props.theme.typography.fontScale.h1};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }

  h2 {
    font-size: ${(props) => props.theme.typography.fontScale.h2};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }

  h3 {
    font-size: ${(props) => props.theme.typography.fontScale.h3};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }

  h4 {
    font-size: ${(props) => props.theme.typography.fontScale.h4};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }

  h5 {
    font-size: ${(props) => props.theme.typography.fontScale.h5};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }

  p {
    font-size: ${(props) => props.theme.typography.fontScale.p};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    &.medium {
      font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }

    &.bold {
      font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
  }
`
