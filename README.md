# Triple 사전과제

안녕하세요, 프론트엔드 개발자 박수경입니다.  
트리플 사전과제 제출합니다.

🔸 **아래 링크를 클릭하면 결과물을 미리 보실 수 있습니다.**  
미리보기 > https://sukyeong-triple-work.netlify.app

<br>
프로젝트를 로컬에 클론 받으신 후, <code>npm start</code>를 터미널에 입력해주시면 웹에서 결과물을 확인하실 수 있습니다.

<br>

🔸 **기술 스택**

- emotion: css-in-js로 기존에는 styled-components를 사용하였는데, emotion이 styled-components보다 조금 더 라이브러리 사이즈가 작고 빠르다는 장점이 있어서 사용하게 되었습니다. 둘 사이의 큰 차이가 뚜렷하게 드러나는 것은 아니지만 emotion이 인라인 styling에 더 용이하다는 점과 SSR 환경에서 사용이 더 편리하다는 특징이 있습니다. 원래 코드를 적을 떄 style을 <code>export default </code> 코드 아래에 적지만, 린트에러로 인해 style을 상위에 적으면서 코드 가독성이 낮아지는 거 같아서 다른 파일로 분리해두었습니다.

<br>

🔸 **폴더 구조**

현재 구현하는 페이지가 하나밖에 없어서 폴더 구조가 와닿지 않을 수 있을 것 같아서 추가 설명드립니다.

- app.layout: 리액트나 넥스트와 같은 라이브러리에서 라우팅을 할 떄 보여지는 페이지들이 담겨있습니다.  
  (main, product, login...)
- app.modules: 광범위하게 공통적으로 사용할 수 있는 모듈들을 모아놓은 폴더입니다.  
  (api, hooks. utils...)
- app.styles: 모든 레이아웃에 공통적으로 적용될 스타일을 관리하는 폴더입니다.  
  (index, reset)
- app.component: 이 프로젝트에서는 없지만 프로젝트 내에서 디자인 시스템처럼 쓰일 공통 컴포넌트들을 관리하는 폴더입니다.  
  (button, select, input...)
- app.feature: 가장 많이 사용하게 되는 폴더로, <code>app.layout</code> 을 기준으로 하위 폴더를 만들게 되고 그 내부에는 <code>components</code>, <code>modules</code>, <code>query</code> 등 해당 레이아웃에서 사용될 개별 컴포넌트, 커스텀 훅 등을 관리합니다. 그리고 그 모든 것들은 <code>screen</code>에 있는 파일에 보여지고(output) 스크린 파일이 레이아웃에 보여지게 됩니다.
