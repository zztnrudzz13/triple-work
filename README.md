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
