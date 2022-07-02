import { Global } from '@emotion/react'

import Main from './app.layout/main/Main'
import { globalStyle } from './app.styles'

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle} />
      <Main />
    </div>
  )
}

export default App
