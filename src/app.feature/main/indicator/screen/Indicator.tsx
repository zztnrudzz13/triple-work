import { css } from '@emotion/react'
import styled from '@emotion/styled'

import ImageIndicator from '../components/ImageIndicator'
import TextIndicator from '../components/TextIndicator'

const appearAnimation = css`
  animation: appear 700ms ease-in-out;
    @keyframes appear {
      from {
        opacity: 0.1;                                                          
        transform: translateY(25px)
      }
      to {
        opacity: 1;
        transform: translateY(0px)
      }
    }
`

const IndicatorWrapper = styled.div`
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

const Indicator = () => {
  return (
    <IndicatorWrapper>
      <div className='body-container'>

      <section className='logo-container'>
        <img className='triple-logo-image' src="/assets/tripleLogo.png" alt="triple-logo"/>
        <p>2019년 2월 기준</p>
      </section>

      <section className='text-and-image-indicator-container'>
        <div className='text-indicator-container'>
          <TextIndicator num={50} boldText="만 명" lightText='의 사용자' />
          <TextIndicator num={21} boldText="만 개" lightText='의 리뷰' />
          <TextIndicator num={83} boldText="만 개" lightText='의 저장' />
        </div>
        <div className='image-indicator-container'>
          <ImageIndicator
            imagePath='/assets/playStore.png'
            alt="play-store"
            place='2018 구글 플레이스토어'
            prize='올해의 앱 최우수상 수상'
          />
          <ImageIndicator
            imagePath='/assets/badgeApple.png'
            alt="play-store"
            place='2018 애플 앱스토어'
            prize='오늘의 여행앱 선정'
          />
        </div>
      </section>
      </div>
    </IndicatorWrapper>
  )
}

export default Indicator