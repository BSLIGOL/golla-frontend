import React, { createContext, useState, useEffect, useContext } from 'react';
/*
    createContext() : React에서 Context를 만들기 위한 함수
    
    AuthContext는 이 Context 객체로 나중에 다른 컴포넌트들에서 인증 상태를 전역적으로 사용할 수 있도록 해줍니다.

    createContext()는 Provider와 Consumer를 내부적으로 생성하는데 여기서는 Provider만 사용하고 있습니다.
*/
const AuthContext = createContext();
/*
    useContext() : React의 useContext 혹은 해당 컨텍스트의 값을 가져오는 데 사용

    useAuth()는 AuthContext를 사용하는 컴포넌트에서 isLoggedIn, Login, Logout 값을 간편하게 사용할 수 있습니다.
*/
export const useAuth = () => useContext(AuthContext);
/*
    AuthProvider는 children을 받아서 그 children에게 AuthContext.Provider를 사용하여 인증 상태(로그인 여부)전달하는
    역할을 합니다.

    isLoggedIn은 로그인 상태를 나타내는 값, setIsLoggedIn은 로그인 상태를 업데이트하는 함수

    !!localStorage.getItem('token') : 로컬 스토리지에 token이 있으면 로그인 상태로 간주하여 treu, 없으면 false로 설정정
*/
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    /*
        useEffect() : 컴포넌트가 처음 렌더링될 때 실행되는 훅. 첫 번째 인자로 전달된 함수는 컴포넌트가 렌더링된 후에 실행됨
        
        두 번째 인자가 빈 배열일 경우, useEffect()는 컴포넌트가 첫 번째 렌더링될 때만 실행됩니다. 따라서, token 값을
        한 번만 확인하여 isLoggedIn 상태를 설정정
     */
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);
    /*
        login : 사용자가 로그인할 때 호출. 로그인 성공 후 서버로부터 받은 token을 localStorage에 저장하고, isLggedIn
        상태를 강제로 반전시켜서 상태를 변경. 상태가 변경되면 AuthContext.Provider를 사용하고 있는 컴포넌트들이 리렌더링됨
    */
    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(prev => !prev); // 강제로 상태 변경하여 리렌더링 유도
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(prev => !prev); // 강제로 상태 변경하여 리렌더링 유도
    };
    /*
        AuthContext.Provider : AuthContext를 사용하려면 Provider 컴포넌트를 사용해야 합니다. 이 컴포넌트 안에 있는
        모든 자식 컴포넌트들은 value로 제공된 값을 사용할 수 있습니다.

        value 이 부분에서 AuthContext에 전달할 값을 설정

        {children} : AuthProvider 컴포넌트는 자식 컴포넌트를 받아서 그 자식 컴포넌트들에 
                    AuthContext.Provider를 통해 인증 상태를 공급
    */
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
