import styled from '@emotion/styled'

const TextIndicatorWrapper = styled.div`
  span {
    font-size: 2.4rem;
  }
  .bold-text {
    font-weight: 500;
  }
  
`

type TextIndicatorProps = {
  boldText: string
  lightText: string
}

const TextIndicator = ({boldText, lightText}: TextIndicatorProps) => {
  return (
    <TextIndicatorWrapper>
      <span className='bold-text'>{boldText}</span>
      <span className='light-text'>{lightText}</span>
    </TextIndicatorWrapper>
  )
}

export default TextIndicator