/*
  React 라이브러리를 가져온다. React 17 이상부터 JSX 변환에 React를 명시적으로 import할 필요가
  없어졌지만, 여전히 React 컴포넌트가 사용되기 때문에 import는 필요하다.
*/
import React from 'react';
/*
  ReactDOM은 React 애플리케이션을 DOM에 렌더링하는 데 사용된다. React 18에서 react-dom/client에서
  createRoot 메서드가 도입되었고, 이는 애플리케이션의 렌더링 루트(root)를 관리하는 데 사용된다.
*/
import ReactDOM from 'react-dom/client';
/*
  App은 애플리케이션의 최상위 컴포넌트로, 내부에 다양한 다른 컴포넌트를 포함하고 있다.
*/
import App from './App';
/*
  reportWebVitals는 성능 측정을 위한 유틸리티 함수로, 웹 애플리케이션의 성능을 모니터링할 수 있게
  해준다. 필수 x
*/
import reportWebVitals from './reportWebVitals';

/*
  ReactDOM.createRoot : React 18부터 도입된 createRoot 메서드를 사용하여 애플리케이션의 최상위
  DOM 노드(root node)를 지정한다.
  
  document.getElementById('root') : index.html 파일의 id="root"인 DOM 엘리먼트를 선택한다.
  이 root 노드는 React 애플리케이션이 렌더링될 위치를 결정한다

  createRoot : React 애플리케이션의 루트를 생성하고 관리하는 역할을 한다. 이 방식은 이전의
  ReactDOM.render 방식보다 성능과 기능 면에서 개선되었다.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
  root.render : createRoot로 생성한 root 객체에서 render 메서드를 호출하여 실제로 애플리케이션을
  렌더링한다.

  <React.StrictMode> : 이 컴포넌트는 개발 모드에서 React 애플리케이션의 잠재적인 문제를 감지하고
  경고하는 역할을 한다. StricMode는 앱에서 권장하지 않는 코드나 부정적인 패턴을 감지할 때 유용하다.
  배포할 때는 없어도 되지만, 개발 과정에서 유용하다.

  <App /> : 앱 전체의 구조를 담당한다.
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();