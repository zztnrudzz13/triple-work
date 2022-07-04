import styled from '@emotion/styled'

import useCountAnimation from '../../../../app.modules/hooks/useCountAnimation'


const TextIndicatorWrapper = styled.div`
  span {
    font-size: 2.25rem;
  }
  .bold-text {
    font-weight: 500;
  }
  
`

type TextIndicatorProps = {
  boldText: string
  lightText: string
  num: number
}

const TextIndicator = ({ num, boldText, lightText }: TextIndicatorProps) => {
  const { count } = useCountAnimation({ initialNumber: 0, endNumber: num })

  return (
    <TextIndicatorWrapper>
      <span className='bold-text'>{count}</span>
      {/* <button onClick={start}>start</button>
      <button onClick={stop}>stop</button> */}
      <span className='bold-text'>{boldText}</span>
      <span className='light-text'>{lightText}</span>
    </TextIndicatorWrapper>
  )
}

export default TextIndicator