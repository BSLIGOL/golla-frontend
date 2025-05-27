import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import AuthContext from "../contexts/AuthContext";

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // AuthContext에서 login 함수 가져오기

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/login", { userId, password });
            
            const token = response.data.token;
            localStorage.setItem("token", token);
            login(token); // AuthContext의 login 함수 호출 (isLoggedIn 상태 업데이트)
            
            navigate("/");
        } catch (error) {
            alert("로그인 실패! 아이디 또는 비밀번호를 확인하세요.");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
            <div className={styles.links}>
                <a href="/signup">회원가입</a> | <a href="/forgot-password">비밀번호 찾기</a>
            </div>
        </div>
    );
}

export default Login;
