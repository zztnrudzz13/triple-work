// Main Page of Triple
// shows main banner, indicator(*), explanation-section ...
import styled from '@emotion/styled'

import Indicator from '../../app.feature/main/indicator/screen/Indicator'

const MainWrapper = styled.div``

const Main = () => {
  return (
    <MainWrapper>
      <Indicator />
    </MainWrapper>
  )
}

export default Main