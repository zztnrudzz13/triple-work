import ImageIndicator from '../components/ImageIndicator'
import TextIndicator from '../components/TextIndicator'
import { IndicatorWrapper } from '../styles/IndicatorStyle'

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
          <TextIndicator num={350} boldText="만 명" lightText='의 사용자' />
          <TextIndicator num={21} boldText="만 개" lightText='의 리뷰' />
          <TextIndicator num={650} boldText="만 개" lightText='의 저장' />
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