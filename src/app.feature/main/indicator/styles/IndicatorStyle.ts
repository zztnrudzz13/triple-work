import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const appearAnimation = css`
  animation: appear 700ms ease-in-out;
  @keyframes appear {
    from {
      opacity: 0.1;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const IndicatorWrapper = styled.div`
  width: 100%;
  height: 34.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .body-container {
    display: flex;
    height: auto;
    gap: 13rem;
  }
  .logo-container {
    position: relative;
    p {
      width: 100%;
      position: absolute;
      color: rgba(58, 58, 58, 0.7);
      text-align: center;
      bottom: 0;
      margin-bottom: 3.125rem;
    }
    ${appearAnimation}
    .triple-logo-image {
      width: 25rem;
      height: 22rem;
    }
  }
  .text-and-image-indicator-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .text-indicator-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
      ${appearAnimation}
      animation-delay: 100ms;
    }
    .image-indicator-container {
      display: flex;
      gap: 2.5rem;
      ${appearAnimation}
      animation-delay: 200ms;
    }
  }
`
