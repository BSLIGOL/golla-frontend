/*
  react-router-dom : React에서 라우팅을 관리하는 라이브러리.
  웹 애플리케이션에서 URL에 따라 다른 컴포넌트를 렌더링할 수 있게 해줌.

  BrowserRouter as Router : URL 경로를 관리하는 컴포넌트로
  최상위 컴포넌트가 되어야 다른 라우팅 컴포넌트들을 감쌀 수 있음.

  Routes : 여러 개의 Route 컴포넌트를 감싸는 컴포넌트
  URL 경로에 따라 렌더링할 컴포넌트를 결정함.

  Route: 특정 경로(Path)와 그에 대응하는 컴포넌트(Element)를 연결함.

  Link : 페이지 전환을 할 때 전체 페이지를 새로 고침하지 않고
  React 내부적으로만 전환할 수 있도록 도와줌.
  */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/*
  AuthProvider : AuthContext를 제공하는 컴포넌트로, 로그인 상태 같은 인증 정보를 전체 앱에서 사용할 수 있게 해줌.
*/
import { AuthProvider } from './contexts/AuthContext';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Diet from "./pages/Diet";
import Board from "./pages/Board";
import AppDownload from "./pages/AppDownload";

/*
  App 컴포넌트
*/
function App() {
  return (
    /* <AuthProvider> : AuthProvider로 애플리케이션을 감싸서, AuthContext를 전역에서 사용할 수 있도록 제공한다
      로그인 정보 같은 상태를 여러 컴포넌트에서 참조할 수 있다.
    */
    <AuthProvider>
      {/* 
        <Router> : Router는 애플리케이션 내에서 라우팅을 처리하는 최상위 컴포넌트이다.
        Router 안에 Routes와 Route를 배치해서 URL 경로에 맞는 컴포넌트를 렌더링하도록 한다.
      */}
      <Router>
        {/* 
          Header와 Footer 컴포넌트는 모든 페이지에서 공통적으로 보여지는 부분이다.
          Router 안에 위치하므로 모든 페이지에서 유지된다.
        */}
        <Header />
        {/* 
          <Routes>: 여러 개의 Route를 감싸는 컴포넌트. 경로와 해당하는 컴포넌트를 매핑한다.
          <Route> : 특정 URL 경로(path)와 그에 대응하는 컴포넌트(element)를 연결한다.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appdownload" element={<AppDownload />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;