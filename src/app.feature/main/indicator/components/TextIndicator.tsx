import useCountAnimation from '../../../../app.modules/hooks/useCountAnimation'
import { TextIndicatorWrapper } from '../styles/TextIndicatorStyle'

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
      <span className='bold-text'>{boldText}</span>
      <span className='light-text'>{lightText}</span>
    </TextIndicatorWrapper>
  )
}

export default TextIndicator