import styled from '@emotion/styled'

import ImageIndicator from '../components/ImageIndicator'
import TextIndicator from '../components/TextIndicator'

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
    gap: 17rem;
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
    .triple-logo-image {
      width: 26rem;
      height: 22.75rem;
    }
  }
  .text-and-image-indicator-container {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    .text-indicator-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }
    .image-indicator-container {
      display: flex;
      gap: 2.5rem;
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
          <TextIndicator boldText="350만 명" lightText='의 사용자' />
          <TextIndicator boldText="21만 개" lightText='의 리뷰' />
          <TextIndicator boldText="650만 개" lightText='의 저장' />
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
            place='2018 애플 엡스토어'
            prize='오늘의 여행앱 선정'
          />
        </div>
      </section>
      </div>
    </IndicatorWrapper>
  )
}

export default Indicator